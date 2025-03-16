import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({ 
  title: "一起玩 NAS! ",
  description: "分享 NAS 的使用经验。",
  lastUpdated: true,
  appearance:'dark',
  head: [
    ['script',{src:"https://static.cloudflareinsights.com/beacon.min.js",'data-cf-beacon':'{"token": "e0485eebb49d4765afdfcc56d58cea01"}'}],
    ['link', { rel: 'icon', href: 'https://img.slarker.me/wiki/04bb35e53d22440d94321e33a0855b13.svg' }]
  ],
  themeConfig: {
    logo: `/logo.svg`,
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
          { text: '定制流程', link: '/diy/process.md' },
          { text: '系统方案', link: '/system_design.md' },
          { text: '技术支持', link: '/diy/support.md' },
          { text: '远程协助', link: '/diy/rustdesk.md' },
          { text: '售后服务', link: '/diy/after_sales_service.md' },
          { text: '闲鱼小铺', link: '/diy/store.md' },
        ]
      },
      { text: '提交需求', link: 'https://jinshuju.net/f/qGaDq1' },
      { text: '交流群组', link: '/contact.md' },
      { text: 'VPS 推荐', link: '/vps.md' },
      {
        text: '关于',
        items: [
          { text: '一起玩 NAS 的朋友们', link: '/link.md' },
          { text: '服务监控', link: 'https://uptime.slarker.me/status/service' },
          { text: '我的博客', link: 'https://slarker.me' },
          { text: '意见反馈', link: '/feedback.md' },
          { text: '原创声明', link: '/copyright.md' },
          { text: '镜像站点', link: 'https://wiki.mynas.chat' },
          { text: '关于网站', link: '/about.md' },
        ]
      },
    ],

    sidebar: [
      {
        text: '选择硬件',
        collapsed: true,
        items: [
          { text: '如何选择 CPU', link: '/hardware/cpu.md' },
          { text: '关于硬解的一些科普', link: '/hardware/decode.md' },
          { text: '常见的 CPU 核显转码效果对比', link: '/hardware/gpu.md' },
          { text: '硬盘的那些事儿', link: '/hardware/harddrive.md' },
          { text: '如何选择内存', link: '/hardware/memory.md' },
          { text: '硬件测试', link: '/hardware/test.md' },
          { text: '功耗信息', link: '/hardware/power_consumption.md' },
        ]
      },
      {
        text: 'NAS 机箱',
        collapsed: true,
        items:[
          { text: '乔思伯机箱', link: '/case/jonsbo.md' },
          { text: '梵隆机箱', link: '/case/fanlong.md' },
          { text: '宝藏盒机箱', link: '/case/baozang.md' },
          { text: '见方机箱', link: '/case/jianfang.md' },
          { text: '星之海机箱', link: '/case/seaofstars.md' },
          { text: '为什么不推荐 3D 打印机箱？', link: '/case/3d_print_case.md' },
          { text: '极限体积 - 最能装的 ITX NAS 机箱！', link: '/case/minicase.md' },
          { text: '性价比之王 - 金河田 N1!', link: '/case/goldenfield.md' },
        ]
      },
      {
        text: '经验分享',
        collapsed: true,
        items: [
          { text: '解决 Docker 镜像无法下载问题', link: '/basic/docker_mirrors.md' },
          { text: '解决问题的技巧 - 善用搜索', link: '/basic/search.md' },
          { text: '常见问题解答', link: '/basic/question.md' },
          { text: '家庭组网的几个建议', link: '/basic/network.md' },
          { text: '常见的远程访问方案', link: '/basic/remote.md' },
          { text: '远程访问需要的上行带宽', link: '/basic/bandwidth.md' },
          // { text: 'NAS 系统该怎么选？', link: '/basic/os.md' },
          { text: '如何确保数据安全？', link: '/basic/data_safe.md' },
          { text: 'UPS - NAS 的好搭档', link: '/basic/ups.md' },
          { text: '温度监控', link: '/basic/temperature.md' },
          { text: '网络速度测试', link: '/basic/speedtest.md' },
          { text: '阵列读写性能测试', link: '/basic/raid_performance.md' },
          { text: '网络唤醒', link: '/basic/wake_on_lan.md' },
          { text: '设置交换机模式', link: '/basic/bridge_network.md' },
          { text: '制作 PE 引导 U 盘', link: '/basic/pe.md' },
          { text: '使用 PE 打包 ISO 镜像', link: '/basic/iso.md' },
          { text: '值得推荐的 NAS 应用', link: '/basic/app.md' },
          { text: '科学解决问题的思路 - 木桶理论', link: '/basic/barreltheory.md' },
          { text: '使用脚本给 BT、PT 资源打标签', link: '/basic/bt_script.md' },
        ]
      },
      {
        text: '推荐应用',
        collapsed: true,
        items: [
          { text: 'Docker Compose 模板', link: '/application/compose.md' },
          // { text: '低门槛、易上手的自动化观影方案', link: '/application/douban_tool.md' },
          { text: '高颜值的 NAS 应用导航 - Homepage', link: '/application/homepage.md' },
          { text: '影音资源库 - 小雅部署教程', link: '/application/xiaoya.md' },
        ]
      },
      {
        text: 'fnOS 教程',
        collapsed: true,
        items: [
          { text: 'fnOS 常见问题解答', link: '/fnos/question.md' },
          { text: '查找 fnOS 设备', link: '/fnos/find_fnos.md' },
          { text: '使用 SSH 登录', link: '/fnos/ssh.md' },
          { text: '常用的下载工具', link: '/fnos/download.md' },
          { text: '下载网盘资源到 NAS', link: '/fnos/aria2.md' },
          { text: '网速测试工具 - OpenSpeedtest', link: '/fnos/speedtest.md' },
          { text: '第三方文件管理器 - FileBrowser', link: '/fnos/filebrowser.md' },
          { text: '飞牛影视刮削、播放网盘电影', link: '/fnos/movie.md' },
          { text: '优秀的照片管理工具 - immich', link: '/fnos/immich.md' },
          { text: '远程访问 fnOS - 比扬云 SD-WAN 组网', link: '/fnos/beyondnetowork.md' },
          { text: '远程访问 fnOS - Tailscale', link: '/fnos/tailscale.md' },
          // { text: '方便、安全远程访问 fnOS - Zerotier', link: '/fnos/zerotier.md' },
          { text: 'fnOS 配置 UPS', link: '/fnos/ups.md' },
          { text: '支持加密的备份工具 - Duplicati', link: '/fnos/duplicati.md' },
          { text: '开源免费的跨平台文件同步工具 - Syncthing', link: '/fnos/syncthing.md' },
          { text: '用网心云把宽带钱赚回来！', link: '/fnos/onethingcloud.md' },
          { text: 'fnOS 虚拟 iStoreOS 软路由', link: '/fnos/istoreos.md' }
        ]
      },
      {
        text: 'iStoreOS 教程',
        collapsed: true,
        items: [
          { text: 'iStoreOS 常见问题', link: '/istoreos/question.md' },
          { text: 'iStoreOS 路由模式设置', link: '/istoreos/route_setting.md' },
        ]
      },
      {
        text: 'Unraid 教程',
        collapsed: true,
        items: [
          { text: 'Unraid 常见问题', link: '/unraid/question.md' },
          { text: '磁盘阵列和 ZFS', link: '/unraid/array.md' },
          { text: '我的 Unraid 数据存储方案', link: '/unraid/storage.md' },
          { text: '共享文件夹', link: '/unraid/share_folder.md' }, 
          { text: '用户和共享', link: '/unraid/user_share.md' },
          { text: '文件管理', link: '/unraid/filemanager.md' },
          { text: '网络测速', link: '/unraid/speedtest.md' },
          { text: '挂载、共享外接磁盘', link: '/unraid/additional_disk.md' },
          { text: '使用命令行格式化硬盘', link: '/unraid/format.md' },
          { text: '一文搞定软路由', link: '/unraid/router.md' },
          { text: '安装 git-lfs', link: '/unraid/git-lfs.md' },
          { text: '安装 Immich 并开启硬件加速', link: '/unraid/deploy_immich.md' },
          { text: 'Immich 智能搜索 - 支持中文的 CLIP 大模型', link: '/unraid/immich_ai_model.md' },
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
          { text: '给使用命令安装的 Docker 应用添加图标', link: '/unraid/app_icon.md' },
          { text: '适合个人和小团队的看板应用 - Planka', link: '/unraid/planka.md' },
          { text: '虚拟 Windows', link: '/unraid/windows.md' },
          { text: '虚拟 HomeAssistantOS', link: '/unraid/haos.md' },
          { text: '虚拟 fnOS (飞牛OS)', link: '/unraid/fnos.md' },
        ]
      },
      {
        text: 'Synology 教程',
        collapsed: true,
        items:[
          { text: '设置引导', link: '/synology/setting_loader.md' },
          { text: '查找群晖设备', link: '/synology/find_synology.md' },
          { text: '安装系统', link: '/synology/install_system.md' },
          { text: '存储池', link: '/synology/storage_pool.md' },
          { text: '使用 SSH 登录', link: '/synology/ssh.md' },
          { text: '虚拟旁路由 (iStoreOS)', link: '/synology/router.md' },
          { text: '虚拟 fnOS (飞牛OS)', link: '/synology/fnos.md' },
          { text: '使用 Docker 安装 Jellyfin 并设置硬解', link: '/synology/jellyfin_decode.md' },
          { text: '使用 Docker 安装 Emby 并设置硬解', link: '/synology/emby_decode.md' },
          { text: '使用 Compose 安装照片管理工具 - Immich', link: '/synology/immich_deploy.md' },
          { text: 'Synology Photos 常见问题', link: '/synology/photos.md' },
          { text: '使用 M.2 Nvme SSD 作为存储空间', link: '/synology/ssd_storage.md' },
          { text: '使用 Docker 安装 qBittorrent', link: '/synology/qbittorrent.md' },
          { text: '使用 macvlan 为 qBittorrent 设置独立 IP', link: '/synology/macvlan.md' },
          // { text: '升级 Compose', link: '/synology/compose_upgrade.md' },
        ]
      },
      {
        text: 'PVE 教程',
        collapsed: true,
        items:[
          { text: '常见功能设置', link: '/pve/basic.md' },
          { text: '更新群晖引导', link: '/pve/update_synology.md' },
          { text: '虚拟 iStoreOS 旁路由', link: '/pve/istoreos.md' },
          { text: '虚拟 Windows', link: '/pve/windows.md' },
          { text: '虚拟 HomeAssistantOS', link: '/pve/haos.md' },
          { text: '重装系统', link: '/pve/reset.md' },
          { text: 'PVE 如何添加 PCIe 设备？', link: '/pve/pcie.md' },
          { text: '使用 LXC 容器安装 qBittorrent', link: '/pve/lxc.md' }, 
        ]
      },
      {
        text: '资源',
        collapsed: true,
        items:[
          { text: '分享好用的 App', link: '/resource/app.md' },
          { text: 'BT 和 PT', link: '/resource/bt_pt.md' },
          { text: '搜索资源的奇技淫巧', link: '/resource/search.md' },
          { text: '推荐好用的工具', link: '/resource/tools.md' },
          { text: '制作系统启动 U 盘', link: '/resource/system_loader.md' },
          
        ]
      }
    ],
    footer: {
      
      message: 'Released under the <a href="https://wiki.slarker.me/copyright.html">CC BY-NC 4.0 License</a>.',
      copyright: '©2024 ~ 2025 <a href="https://slarker.me">Slark</a>. All rights reserved.'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    }
  }
})
