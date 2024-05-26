# Immich 智能搜索 - 支持中文的 CLIP 大模型

Immich 默认的智能搜索模型是 `ViT-B-32__openai`，但这个模型不支持中文，Immich 官方提供了一些大模型，在 [模型列表](https://huggingface.co/immich-app) 可以找到。其中就有一个 [XLM-Roberta-Large-Vit-B-16Plus](https://huggingface.co/immich-app/XLM-Roberta-Large-Vit-B-16Plus) 支持中文。

## 拉取模型

网上介绍的办法有点麻烦，路径很容易搞错，这里介绍一个比较简单的办法。可以直接通过 git 将这个模型直接拉到本地。需要提前 [安装 git-lfs](/unraid/git-lfs.md)。

安装好 `git-lfs` 之后，可以打开 Unraid 终端，直接用下面的命令拉取模型：

```sh
# 进入到 immich 默认的模型目录
cd /var/lib/docker/volumes/immich_model-cache/_data/clip

# 拉取模型
git clone https://huggingface.co/immich-app/XLM-Roberta-Large-Vit-B-16Plus
```

## 设置 Smart Search

模型拉下来之后，可以在 Immich 后台 `Administration` -> `Setting` -> `Machine Learning Setting` -> `Smart Search` 中，将 `CLIP MODEL` 修改为大模型的名称，并点击保存。

![t43n4f01.asi_BJGHiR](https://img-1255332810.cos.ap-chengdu.myqcloud.com/t43n4f01.asi_BJGHiR.png)

之后可以在 `Docker Compose` 中 `UPDATE STACK`，然后在 Immich 后台 `Administration` -> `Job` 中重新跑一遍 `SMART SEARCH`。

![ksyuslwu.0yd_pmsMrr](https://img-1255332810.cos.ap-chengdu.myqcloud.com/ksyuslwu.0yd_pmsMrr.png)

跑的过程中 CPU 占用会比较高，属于正常现象，跑完之后就会正常。跑完就能用中文搜索了：

![WechatIMG9029_Y9m36O](https://img-1255332810.cos.ap-chengdu.myqcloud.com/WechatIMG9029_Y9m36O.jpg)

## 其它模型

如果你想试试其它模型，可以在 [模型列表](https://huggingface.co/immich-app)，点具体某个模型进去，在右侧可以找到 `Clone repository`：

![CKxbdq_mqWVnH](https://img-1255332810.cos.ap-chengdu.myqcloud.com/CKxbdq_mqWVnH.png)

打开后点击命令右侧的复制按钮：

![SEGqHx_eWztII](https://img-1255332810.cos.ap-chengdu.myqcloud.com/SEGqHx_eWztII.png)

到 Unraid 终端直接执行即可。

![iteqsuse.3rl_nP7EXQ](https://img-1255332810.cos.ap-chengdu.myqcloud.com/iteqsuse.3rl_nP7EXQ.png)