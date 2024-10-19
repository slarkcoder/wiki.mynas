# Immich 智能搜索 - 支持中文的 CLIP 大模型

:::info 重要提示
Immich 目前已经支持直接修改模型名称，保存之后，即可自动拉取模型。只要你的模型名称和网络都没问题，直接改模型名称即可，不需要手动拉模型了。

支持中文的 CLIP 大模型：`XLM-Roberta-Large-Vit-B-16Plus`。

在 `immich` 后台 `管理` -> `设置` -> `机器学习设置` -> `智能搜索` -> `CLIP 模型` 中粘贴上面的模型名称，点击保存。之后在 `任务` 中重新运行 `智能搜索` 任务。

![](https://img.slarker.me/wiki/52a4873d487343efb1ff740100f10955.webp)
:::

Immich 默认的智能搜索模型是 `ViT-B-32__openai`，但这个模型不支持中文，Immich 官方提供了一些大模型，在 [模型列表](https://huggingface.co/immich-app) 可以找到。其中就有一个 [XLM-Roberta-Large-Vit-B-16Plus](https://huggingface.co/immich-app/XLM-Roberta-Large-Vit-B-16Plus) 支持中文。

:::warning 注意
模型的体积比较大，下面介绍的拉取模型办法实际是把模型保存到了 `/mnt/user/system/docker/docker.img` 中， Unraid 默认的 Docker 虚拟磁盘大小为 20G，如果你没有修改过，可以提前将虚拟磁盘容量改大一些，避免拉取过程出错。具体办法如下：

在 Unraid `设置` -> `Docker` -> `启用 Docker` 修改为 `否`，修改虚拟磁盘大小之后重新启用即可。
:::

## 使用 git-lfs 拉取模型

网上介绍的办法有点麻烦，路径很容易搞错，这里介绍一个比较简单的办法。可以直接通过 git 将这个模型直接拉到本地。需要提前 [安装 git-lfs](/unraid/git-lfs.md)。

安装好 `git-lfs` 之后，可以打开 Unraid 终端，直接用下面的命令拉取模型：

```sh
# 进入到 immich 默认的模型目录
cd /var/lib/docker/volumes/immich_model-cache/_data/clip

# 拉取模型
git clone https://huggingface.co/immich-app/XLM-Roberta-Large-Vit-B-16Plus
```

## 更新模型

如果后续模型有更新，可以直接 `cd` 到对应的模型下面，使用 `git pull` 直接更新。

![ldGAKu_zvmuzo](https://img.slarker.me/wiki/ldGAKu_zvmuzo.png)

## 设置 Smart Search

模型拉下来之后，可以在 Immich 后台 `Administration` -> `Setting` -> `Machine Learning Setting` -> `Smart Search` 中，将 `CLIP MODEL` 修改为大模型的名称，并点击保存。

![t43n4f01.asi_BJGHiR](https://img.slarker.me/wiki/t43n4f01.asi_BJGHiR.png)

之后可以在 `Docker Compose` 中 `UPDATE STACK`，然后在 Immich 后台 `Administration` -> `Job` 中重新跑一遍 `SMART SEARCH`。

![ksyuslwu.0yd_pmsMrr](https://img.slarker.me/wiki/ksyuslwu.0yd_pmsMrr.png)

跑的过程中 CPU 占用会比较高，属于正常现象，跑完之后就会正常。跑完就能用中文搜索了：

![WechatIMG9029_Y9m36O](https://img.slarker.me/wiki/WechatIMG9029_Y9m36O.jpg)

## 其它模型

如果你想试试其它模型，可以在 [模型列表](https://huggingface.co/immich-app)，点具体某个模型进去，在右侧可以找到 `Clone repository`：

![CKxbdq_mqWVnH](https://img.slarker.me/wiki/CKxbdq_mqWVnH.png)

打开后点击命令右侧的复制按钮：

![SEGqHx_eWztII](https://img.slarker.me/wiki/SEGqHx_eWztII.png)

到 Unraid 终端直接执行即可。

![iteqsuse.3rl_nP7EXQ](https://img.slarker.me/wiki/iteqsuse.3rl_nP7EXQ.png)