---
title: docker 学习笔记
---
# docker 学习笔记

##  卸载旧版本

```bash
 sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

## 需要安装的包

~~~~bash
yum install -y yum-utils
~~~~

## 设置镜像仓库

````bash
 sudo yum-config-manager \
    --add-repo \
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo 国内阿里云
    # https://download.docker.com/linux/centos/docker-ce.repo
````

## 安装docker

````bash
sudo yum install docker-ce docker-ce-cli containerd.io #ce 表示社区版
````

## 查看docker version

## 运行hello-world

![docker_run_hello_world](https://pic.wangez.cn/notebook/docker_run_hello_world.png)

## 2. 配置镜像加速器

针对Docker客户端版本大于 1.10.0 的用户

您可以通过修改daemon配置文件/etc/docker/daemon.json来使用加速器

```
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://x2d7z4hl.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

# docker 命令

## docker rmi 删除镜像

递归删除

````bash
[root@localhost ~]# docker rmi -f $(docker images -aq)
Untagged: hello-world:latest
Untagged: hello-world@sha256:df5f5184104426b65967e016ff2ac0bfcd44ad7899ca3bbcf8e44e4461491a9e
Deleted: sha256:d1165f2212346b2bab48cb01c1e39ee8ad1be46b87873d9ca7a4e434980a7726
[root@localhost ~]# 
````

# 容器命令

## 新建容器



