class CookiesController < ApplicationController
  def index
    @cookies = Cookie.order(:name)
  end

  def update
    @cookie = Cookie.find_by(id: params[:id])
    @cookie.update(cookie_params)
    if @cookie.save
      render json: @cookie
    end
  end

  def cookie_params
    params.permit(:name, :description)
  end
end
