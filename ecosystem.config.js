/*
 * @Date: 2023-01-02 15:52:24
 * @Author: 溺水有三千_wsh
 * @LastEditTime: 2024-01-11 16:53:10
 * @Describe: pm2设置
 */
module.exports = {
  apps: [
    {
      name: '我的后台',
      watch: false,
      interpreter: 'ts-node', // 指定解释器
      script: './src/index.ts',
      ignore_watch: ['node_modules', 'logs', 'pm2', 'public', 'remarks.md'],
      error_file: './src/pm2/logs/err.log',
      out_file: './src/pm2/logs/out.log',
      log_file: './src/pm2/logs/logs.log',
      log_type: 'json',
      autorestart: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      max_memory_restart: '2G', // 超过多大内存自动重启，仅防止内存泄露，根据自己的业务设置
      env_production: {
        NODE_ENV: 'development',
      },
      env_development: {
        PORT: 8090,
        NODE_ENV: 'development',
      },
    },
  ],
}
