require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'log_in_app'
}

ActiveRecord::Base.establish_connection(options)

