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
      { text: '定制 NAS & 联系我', 
        items: [
          { text: '定制流程', link: '/process.md' },
          // { text: '系统方案', link: '/system_design.md' },
          { text: '技术支持', link: '/support.md' },
          { text: '售后服务', link: '/after_sales_service.md' },
          { text: '闲鱼-鱼小铺', link: '/store.md' },
          { text: '交流群组', link: '/contact.md' },
        ]
      },
      { text: '我的博客', link: 'https://slarker.me' },
      { text: '☕️ 喝咖啡！', link: '/coffee.md' },
      {
        text: '关于',
        items: [
          { text: '意见反馈', link: '/feedback.md' },
          { text: '原创版权声明', link: '/copyright.md' },
          { text: '镜像站点', link: 'https://wiki.mynas.chat' },
          { text: '关于网站', link: '/about.md' },
        ]
      },
    ],

    sidebar: [
      {
        text: '选择硬件',
        collapsed: false,
        items: [
          { text: '如何选择 CPU', link: '/hardware/cpu.md' },
          { text: '关于硬解的一些科普', link: '/hardware/decode.md' },
          { text: '常见的 CPU 核显转码效果对比', link: '/hardware/gpu.md' },
          { text: '硬盘的那些事儿', link: '/hardware/harddrive.md' },
          { text: '如何选择内存', link: '/hardware/memory.md' },
        ]
      },
      {
        text: '经验分享',
        collapsed: false,
        items: [
          { text: '常见的远程访问方案', link: '/basic/remote.md' },
          { text: '远程访问需要的上行带宽', link: '/basic/bandwidth.md' },
          // { text: 'NAS 系统该怎么选？', link: '/basic/os.md' },
          { text: '如何确保数据安全？', link: '/basic/data_safe.md' },
          { text: '网络唤醒', link: '/basic/wake_on_lan.md' },
          { text: '设置交换机模式', link: '/basic/bridge_network.md' },
          { text: '值得推荐的 NAS 应用', link: '/basic/docker.md' },
          { text: '科学解决问题的思路 - 木桶理论', link: '/basic/barreltheory.md' },
          { text: '解决问题的技巧 - 善用搜索', link: '/basic/search.md' },
        ]
      },
      {
        text: '推荐应用',
        collapsed: false,
        items: [
          { text: '高颜值的 NAS 应用导航 - Homepage', link: '/application/homepage.md' },
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
          { text: '自定义 Docker 图标', link: '/unraid/custom_docker_icon.md' },
          { text: '使用 Jellyfin 直接播放网盘！', link: '/unraid/jellyfin_play_clouddrive.md' },
          { text: '开源免费的备份方案 - Duplicati', link: '/unraid/duplicati.md' },
          { text: '我的 Unraid 使用体验', link: '/unraid/user_experience.md' },
          { text: 'Unraid 必装的一些插件', link: '/unraid/plugins.md' },
          { text: '为 qBittorrent 更换好看且易用的 WebUI', link: '/unraid/qbittorrent_webui.md' },
          { text: 'Intel 第 11 代低功耗 CPU 开启核显硬解', link: '/unraid/intel_gpu_setting.md' },
          { text: '安装 Jellyfin 实现硬解 4K', link: '/unraid/jellyfin_harddecode.md' },
          { text: '开源的密码管理器 - Bitwarden', link: '/unraid/bitwarden.md' },
          { text: '支持 selfhosted 的跨平台剪贴板同步方案 - SyncClipboard', link: '/unraid/clipboard_sync.md' },
          { text: '解决虚拟组网远程无法访问 80 端口问题', link: '/unraid/remote.md' },
          { text: '小姐姐元数据刮削解决方案', link: '/unraid/javspider.md' },
          { text: '影音资源库 - 小雅部署教程', link: '/unraid/xiaoya.md' },
        ]
      },
      {
        text: 'Synology',
        collapsed: false,
        items:[
          { text: '安装系统', link: '/synology/install_system.md' },
          { text: '查找群晖设备', link: '/synology/find_synology.md' },
          { text: '使用 SSH 登录', link: '/synology/ssh.md' },
          { text: '使用 Docker 安装 Jellyfin 并设置硬解', link: '/synology/jellyfin_decode.md' },
          { text: '使用 Docker 安装 Emby 并设置硬解', link: '/synology/emby_decode.md' },
          { text: '使用 Compose 安装照片管理工具 - Immich', link: '/synology/immich_deploy.md' },
          { text: 'Synology Photos 常见问题', link: '/synology/photos.md' },
          { text: '使用 M.2 Nvme SSD 作为存储空间', link: '/synology/ssd_storage.md' },
        ]
      },
      {
        text: 'PVE',
        collapsed: false,
        items:[
          { text: '更新群晖引导', link: '/pve/update_synology.md' },
          // { text: '远程访问 Windows 虚拟机', link: '/pve/windows_remote.md' },
          
        ]
      },
      {
        text: '机箱',
        // collapsed: false,
        items:[
          { text: '乔思伯机箱', link: '/case/jonsbo.md' },
          { text: '为什么不推荐 3D 打印机箱？', link: '/case/3d_print_case.md' },
          { text: '极限体积 - 最能装的 ITX NAS 机箱！', link: '/case/minicase.md' },
        ]
      },
      {
        text: '资源',
        // collapsed: false,
        items:[
          { text: '分享好用的 App', link: '/resource/app.md' },
          { text: 'BT 和 PT', link: '/resource/bt_pt.md' },
          { text: '搜索资源的奇技淫巧', link: '/resource/search.md' },
        ]
      }
    ],
    footer: {
      message: 'Released under the CC BY-NC 4.0 License.',
      copyright: '©2024 Slark. All rights reserved.'
    },
    search: {
      provider: 'local'
    }
  }
})
