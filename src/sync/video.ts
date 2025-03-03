import type { PlatformInfo } from './common';
import { VideoBaijiahao } from './video/baijiahao';
import { VideoBilibili } from './video/bilibili';
import { VideoDouyin } from './video/douyin';
import { VideoKuaishou } from './video/kuaishou';
import { VideoOkjike } from './video/okjike';
import { VideoRednote } from './video/rednote';
import { VideoTiktok } from './video/tiktok';
import { VideoWeibo } from './video/weibo';
import { VideoWeiXinChannel } from './video/weixinchannel';
import { VideoYoutube } from './video/youtube';

export const VideoInfoMap: Record<string, PlatformInfo> = {
  VIDEO_BILIBILI: {
    type: 'VIDEO',
    name: 'VIDEO_BILIBILI',
    homeUrl: 'https://member.bilibili.com/',
    faviconUrl: 'https://static.hdslb.com/images/favicon.ico',
    iconifyIcon: 'simple-icons:bilibili',
    platformName: chrome.i18n.getMessage('platformBilibili'),
    injectUrl: 'https://member.bilibili.com/platform/upload/video/frame',
    injectFunction: VideoBilibili,
  },
  VIDEO_DOUYIN: {
    type: 'VIDEO',
    name: 'VIDEO_DOUYIN',
    homeUrl: 'https://creator.douyin.com/',
    faviconUrl: 'https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico',
    platformName: chrome.i18n.getMessage('platformDouyin'),
    injectUrl: 'https://creator.douyin.com/creator-micro/content/upload',
    injectFunction: VideoDouyin,
  },
  VIDEO_YOUTUBE: {
    type: 'VIDEO',
    name: 'VIDEO_YOUTUBE',
    homeUrl: 'https://studio.youtube.com/',
    faviconUrl: 'https://www.youtube.com/favicon.ico',
    platformName: chrome.i18n.getMessage('platformYoutube'),
    injectUrl: 'https://studio.youtube.com/',
    injectFunction: VideoYoutube,
  },
  VIDEO_REDNOTE: {
    type: 'VIDEO',
    name: 'VIDEO_REDNOTE',
    homeUrl: 'https://creator.xiaohongshu.com',
    faviconUrl: 'https://creator.xiaohongshu.com/favicon.ico',
    iconifyIcon: 'simple-icons:xiaohongshu',
    platformName: chrome.i18n.getMessage('platformRednote'),
    injectUrl: 'https://creator.xiaohongshu.com/publish/publish',
    injectFunction: VideoRednote,
  },
  VIDEO_TIKTOK: {
    type: 'VIDEO',
    name: 'VIDEO_TIKTOK',
    homeUrl: 'https://www.tiktok.com/tiktokstudio',
    faviconUrl: 'https://pic1.zhimg.com/80/v2-9ad49e8e52b473e4c366b69bc9653a45_1440w.png',
    platformName: chrome.i18n.getMessage('platformTiktok'),
    injectUrl: 'https://www.tiktok.com/tiktokstudio/upload',
    injectFunction: VideoTiktok,
  },
  VIDEO_WEIXINCHANNEL: {
    type: 'VIDEO',
    name: 'VIDEO_WEIXINCHANNEL',
    homeUrl: 'https://channels.weixin.qq.com/platform',
    faviconUrl: 'https://res.wx.qq.com/t/wx_fed/finder/helper/finder-helper-web/res/favicon-v2.ico',
    platformName: chrome.i18n.getMessage('platformWeiXinVideo'),
    injectUrl: 'https://channels.weixin.qq.com/platform/post/create',
    injectFunction: VideoWeiXinChannel,
  },
  VIDEO_KUAISHOU: {
    type: 'VIDEO',
    name: 'VIDEO_KUAISHOU',
    homeUrl: 'https://cp.kuaishou.com/',
    faviconUrl: 'https://www.kuaishou.com/favicon.ico',
    platformName: chrome.i18n.getMessage('platformKuaishou'),
    injectUrl: 'https://cp.kuaishou.com/article/publish/video',
    injectFunction: VideoKuaishou,
  },
  VIDEO_BAIJIAHAO: {
    type: 'VIDEO',
    name: 'VIDEO_BAIJIAHAO',
    homeUrl: 'https://baijiahao.baidu.com/',
    faviconUrl: 'https://pic.rmb.bdstatic.com/10e1e2b43c35577e1315f0f6aad6ba24.vnd.microsoft.icon',
    platformName: chrome.i18n.getMessage('platformBaijiahao'),
    injectUrl: 'https://baijiahao.baidu.com/builder/rc/edit?type=videoV2',
    injectFunction: VideoBaijiahao,
  },
  VIDEO_WEIBO: {
    type: 'VIDEO',
    name: 'VIDEO_WEIBO',
    homeUrl: 'https://weibo.com/',
    faviconUrl: 'https://weibo.com/favicon.ico',
    platformName: chrome.i18n.getMessage('platformWeibo'),
    injectUrl: 'https://weibo.com/upload/channel',
    injectFunction: VideoWeibo,
  },
  VIDEO_OKJIKE: {
    type: 'VIDEO',
    name: 'VIDEO_OKJIKE',
    homeUrl: 'https://web.okjike.com',
    faviconUrl: 'https://web.okjike.com/favicon.ico',
    platformName: chrome.i18n.getMessage('platformOkjike'),
    injectUrl: 'https://web.okjike.com',
    injectFunction: VideoOkjike,
  },
};
