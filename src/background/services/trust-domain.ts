import { Storage } from '@plasmohq/storage';

const storage = new Storage({ area: 'local' });

export const trustDomainMessageHandler = async (request, sender, sendResponse) => {
  if (request.action === 'MUTLIPOST_EXTENSION_REQUEST_TRUST_DOMAIN') {
    // 检查域名是否已经被信任
    const trustedDomains = (await storage.get<Array<{ domain: string }>>('trustedDomains')) || [];
    const hostname = new URL(sender.origin).hostname;
    const isTrusted = trustedDomains.some(({ domain }) => {
      if (domain.startsWith('*.')) {
        const wildCardDomain = domain.slice(2);
        return hostname.endsWith(wildCardDomain);
      }
      return hostname === domain;
    });

    // 如果域名已经被信任，直接返回
    if (isTrusted) {
      return sendResponse({ trusted: true });
    }

    const params = {
      action: 'MUTLIPOST_EXTENSION_REQUEST_TRUST_DOMAIN',
      origin: hostname,
    };

    const encodedParams = btoa(JSON.stringify(params));

    // 打开信任域名确认窗口
    chrome.windows.create({
      url: chrome.runtime.getURL(`tabs/trust-domain.html#${encodedParams}`),
      type: 'popup',
      width: 800,
      height: 600,
    });
  }
};
