require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

set :bind, '0.0.0.0'
set :port, 3000

get '/' do
  "Hello World"
  #@stock_code = params[:stock] 
  #@result = {}
  #if @stock_code != ""
    #@result = YahooFinance::get_quotes(YahooFinance::StandardQuote, @stock_code) 
  #end
  erb :index 
end

