class CookiesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @cookies = Cookie.all
    render json: @cookies
  end

  def show
    @cookie = Cookie.find(params[:id])
    render json: @cookie
  end

  def create
    @cookie = Cookie.new(cookies_params)
    if @cookie.save
      render json: @cookie
    end
  end

  private
  def cookies_params
    params.require(:cookie).permit(:name, :description, :price, :tasty)
  end
end
