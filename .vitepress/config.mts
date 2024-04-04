import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-cn',
  title: "一起玩 NAS! ",
  description: "分享 NAS 的使用经验。",
  lastUpdated: true,
  themeConfig: {
    logo: `/play.svg`,
    lastUpdated: {
      text: '更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '我的博客', link: 'https://slarker.me' },
      { text: '定制 NAS & 联系我', link: '/contact.md' },
      { text: '☕️ 喝咖啡！', link: '/coffee.md' }
    ],

    sidebar: [
      {
        text: 'NAS 常见问题汇总',
        collapsed: false,
        items: [
          { text: '如何选择 CPU', link: '/basic/cpu.md' },
          { text: '如何选择内存', link: '/basic/memory.md' },
          { text: '硬盘的那些事儿', link: '/basic/harddrive.md' },
          { text: '常见的 CPU 核显转码效果对比', link: '/basic/gpu.md' },
          { text: '常见的远程访问方案', link: '/basic/remote.md' },
          { text: '关于硬解的一些科普', link: '/basic/decode.md' },
          // { text: 'NAS 系统该怎么选？', link: '/basic/os.md' },
          { text: '保护数据安全', link: '/basic/data.md' },
          { text: '值得推荐的 NAS 应用', link: '/basic/app.md' }
        ]
      },
      {
        text: 'Unraid',
        collapsed: false,
        items: [
          { text: '用户和共享', link: '/unraid/user_share.md' },
          { text: '文件管理', link: '/unraid/filemanager.md' },
          { text: '网络测速', link: '/unraid/speedtest.md' },
          { text: '配置 Docker 加速镜像', link: '/unraid/docker_mirrors.md' },
          { text: '我的 Unraid 数据存储方案', link: '/unraid/storage.md' },
          { text: '挂载、共享外接磁盘', link: '/unraid/additional_disk.md' },
          { text: '使用命令行格式化硬盘', link: '/unraid/format.md' },
          { text: '一文搞定软路由', link: '/unraid/router.md' },
          { text: '安装 Immich 并开启硬件加速', link: '/unraid/deploy_immich.md' },
          { text: '安装 TinyMediaManager 并解决中文乱码问题', link: '/unraid/tmm.md' },
          { text: '通过模板更新 Docker 应用', link: '/unraid/unraid_docker_template.md' },
          { text: '使用 Jellyfin 直接播放网盘！', link: '/unraid/jellyfin_play_clouddrive.md' },
          { text: '开源免费的备份方案 - Duplicati', link: '/unraid/duplicati.md' },
          { text: '我的 Unraid 使用体验', link: '/unraid/user_experience.md' },
          { text: 'Unraid 必装的一些插件', link: '/unraid/plugins.md' },
          { text: '为 qBittorrent 更换好看且易用的 WebUI', link: '/unraid/qbittorrent_webui.md' },
          { text: '安装 Jellyfin 实现硬解 4K', link: '/unraid/harddecode.md' },
          { text: '开源的密码管理器 - Bitwarden', link: '/unraid/bitwarden.md' },
        ]
      },
      {
        text: 'Synology',
        // collapsed: false,
        items:[
          { text: '安装系统', link: '/synology/install_system.md' },
          { text: '使用 Docker 安装 Jellyfin 并设置硬解', link: '/synology/jellyfin_decode.md' },
          { text: '使用 Docker 安装 Emby 并设置硬解', link: '/synology/emby_decode.md' },
          { text: '使用 Compose 安装照片管理工具 - Immich', link: '/synology/immich_deploy.md' },
        ]
      },
      {
        text: '其它',
        // collapsed: false,
        items:[
          { text: '乔思伯机箱安装硬盘', link: '/case/jonsbo.md' },
          { text: '极限体积 - 最能装的 ITX NAS 机箱！', link: '/case/minicase.md' },
        ]
      },
      {
        text: '资源',
        // collapsed: false,
        items:[
          { text: '搜索资源的奇技淫巧', link: '/resource/search.md' },
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: '©2024 Slark. All rights reserved.'
    },
    search: {
      provider: 'local'
    }
  }
})
