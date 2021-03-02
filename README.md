## node-cli

1.  创建工程

    - `npm init -y`

    - package.json 新增 bin 字段，指定 cli 命名和脚本文件

      ```json
      "bin": {
        "cfa": "./bin/cfa.js" /* cfa:create-fe-app缩写 */
      }
      ```

    - 根目录下新增脚本文件：`bin/cfa.js`，并在文件第一行添加

      ```js
      #!/usr/bin/env node /* 指定脚本解释器为 node */

      ```

    - 执行 `npm link`， 创建本地全局链接

    - 执行 `cfa`，测试本地 cli 命令

2.  定制命令行

3.  打印欢迎界面

4.  克隆项目

5.  安装依赖

6.  发布 npm
