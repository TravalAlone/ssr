###
 # @Author: sheng.wang
 # @Date: 2021-01-17 22:48:35
 # @LastEditTime: 2021-01-18 15:16:52
 # @LastEditors: sheng.wang
 # @Description: 
 # @FilePath: /baseProject/scripts/server/start.sh
### 
NODE_ENV=development nodemon --exec 'babel-node ./src/server/app.js'