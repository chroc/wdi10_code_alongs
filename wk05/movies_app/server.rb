require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

set :bind, '0.0.0.0'
set :port, 3000

get '/' do
  @movie_name = params[:movie]
  omdb_api = "http://omdbapi.com/?t=#{@movie_name}"

  unless @movie_name.nil? || @movie_name.empty?
    @result = HTTParty.get(omdb_api) 
  end

  erb :index 
end

