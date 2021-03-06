# git commit --amend

修改提交的内容分为2种情况：

- 提交了代码之后，又有新的改动，不想创建两个commit
- 之前commit message的描述有误

这时可以使用`git commit --amend`命令把新的内容添加到之前的commit里面，这个命令没有添加新的提交，而是用新提交取代了原始提交。

**注意**

- `git commit --amend`会把暂存区的文件自动加入
- 修改上次comment直接使用`git commit --amend -m` ，当修改前几次提交时需要先分离HEAD到指定的节点
    ```bash
    git checkout 节点哈希值

    //HEAD分离并指向前一个节点
    git checkout 分支名/HEAD^
    
    //HEAD分离并指向前N个节点
    git checkout 分支名～N
    ```
- 上一次提交需要还未push到远程分支，不然修改完后需要强制push。`git push --force`

**操作**

执行`git commit --amend`

![](./images/amend.png)

键入`：i`，此时进入了输入模式，可对message信息进行修改

修改完成后，按下Esc键退出编辑模式，在键入 `:wq` 回车退出并保存修改，完成提交。该操作会改变原来的commit id。