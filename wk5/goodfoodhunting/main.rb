require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'

set :bind, '0.0.0.0'
set :port, 3000

def run_sql(sql)
  db = PG.connect(dbname: 'goodfoodhunting')
  results = db.exec(sql)
  db.close
  return results
end

get '/' do
  @dishes = run_sql("SELECT * FROM dishes ORDER BY name;")
  erb :index
end

get '/dishes/new' do
  erb :dishes_new
end

post '/dishes' do
  run_sql("INSERT INTO dishes (name, image_url) VALUES ('#{ params[:name] }', '#{ params[:image_url] }');")
  redirect to '/'
end

get '/dishes/:id' do
  result = run_sql("SELECT * FROM dishes WHERE id = #{params[:id]};") 
  @dish = result[0]
  
  erb :dishes_show
end

get '/dishes/:id/edit' do
  result = run_sql("SELECT * FROM dishes WHERE id = #{params[:id]};")
  @dish = result[0]
  
  erb :dishes_edit
end

post '/dishes/:id' do
  run_sql("UPDATE dishes SET name = '#{params[:name]}', image_url = '#{params[:image_url]}' WHERE id = #{params[:id]};")
  redirect to "/dishes/#{params[:id]}"
end

post '/dishes/:id/delete' do
  run_sql("DELETE FROM dishes WHERE id = #{params[:id]};")
  redirect to "/"
end

