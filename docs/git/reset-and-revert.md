# git reset 和 git revert 的区别

## git reset

reset 用于回退版本，有三种模式，soft、mixed、hard
![](https://upload-images.jianshu.io/upload_images/4428238-fcad08ebe26933a6.png?imageMogr2/auto-orient/strip|imageView2/2/w/638/format/webp)

### --hard

**重置 stage 区和工作目录**

`reset --hard` 会在重置 HEAD 和 branch 的同时，重置 stage 区和工作目录里的内容。当你在 reset 后面加了 --hard 参数时，你的 stage 区和工作目录里的内容会被完全重置为和 HEAD 的新位置相同的内容。换句话说，就是你的没有 commit 的修改会被全部擦掉。

### --soft

**保留工作目录，并把重置 HEAD 所带来的新的差异放进暂存区**

`reset --soft` 会在重置 HEAD 和 branch 时，保留工作目录和暂存区中的内容，并把重置 HEAD 所带来的新的差异放进暂存区。

### --mixed

**保留工作目录，并清空暂存区**

`reset` 如果不加参数，那么默认使用 `--mixed` 参数。它的行为是：保留工作目录，并且清空暂存区。也就是说，工作目录的修改、暂存区的内容以及由 reset 所导致的新的文件差异，都会被放进工作目录。简而言之，就是「把所有差异都混合（mixed）放在工作目录中」。

### 总结

实质上，`reset` 这个指令虽然可以用来撤销 commit ，但它的实质行为并不是撤销，而是移动 HEAD ，并且「捎带」上 HEAD 所指向的 branch（如果有的话）。

而`reset --hard HEAD^`之所以起到了撤销 commit 的效果，是因为它把 HEAD 和它所指向的 branch 一起移动到了当前 commit 的父 commit 上，从而起到了「撤销」的效果：

### 使用场景

- **--hard**：要放弃目前本地的所有改变,抛弃目标节点后的所有 commit
- **--soft**：想合并「当前节点」与「reset 目标节点」之间不具太大意义的 commit 记录，假如你需要把频繁提交的 commit 整合成一个 commit 的时候
- **--mixed（默认）**：与--soft 类似，再次提交多了 git add 添加到暂存区的操作

```bash
git reset --<参数> HEAD^ //回退到上一个提交
git reset --<参数> HEAD~n //回退到前n次提交
git reset --<参数> <hash-id> //回退到指定提交
git reset --<参数> <someOtherBranch> //重置本地分支以指向另一个分支
git reset --hard origin/master //将本地 master 分支重置为远程 master 分支，用于舍弃本地在master做的提交
```

## git revert

在当前提交后面，新增一次提交，抵消掉上一次提交导致的所有变化，不会改变过去的历史，主要是用于安全地取消过去发布的提交

```bash
git revert <commit_id>
```

### revert 合并提交

合并提交通常无法 `revert`，合并提交是两条分支的交集节点，而 git 不知道需要撤销的哪一条分支，需要添加参数 `-m` 指定主线分支，保留主线分支的代码，另一条则被撤销。

-m 后面要跟一个 parent number 标识出"主线"，一般使用 1 保留主分支代码。

```bash
git revert -m 1 <commitHash>
```

在 `master` 分支 `revert` 合并提交后，然后切到 `feature` 分支修复好 `bug`，再合并到 `master` 分支时，会发现之前被 `revert` 的修改内容没有重新合并进来。

因为使用 `revert` 后， `feature` 分支的 `commit` 还是会保留在 `master` 分支的记录中，当你再次合并进去时，`git` 判断有相同的 `commitHash`，就忽略了相关 `commit` 修改的内容。

这时就需要 `revert` 掉之前 `revert` 的合并提交

```bash
git revert <之前revert合并提交的commitHash>
```

## 区别

- `git revert` 是用一次新的 commit 来回滚之前的 commit，`git reset` 是直接删除指定的 commit
- `git reset` 是把 HEAD 向后移动了一下，而 `git revert` 是 HEAD 继续前进，只是新的 commit 的内容和要 revert 的内容正好相反，能够抵消要被 revert 的内容
- 在回滚这一操作上看，效果差不多。**但是在日后继续 merge 以前的老版本时有区别**
  - `git revert` 是用一次逆向的 commit“中和”之前的提交，因此日后合并老的 branch 时，之前提交合并的代码仍然存在，导致不能够重新合并
  - `git reset` 是之间把某些 commit 在某个 branch 上删除，因而和老的 branch 再次 merge 时，这些被回滚的 commit 应该还会被引入

**参考文章：**

[Git Reset 三种模式](https://www.jianshu.com/p/c2ec5f06cf1a)

[面试官：说说你对 git reset 和 git revert 的理解？区别？](https://mp.weixin.qq.com/s/Z3kLQz67omQdT8GA5LsC7g)
