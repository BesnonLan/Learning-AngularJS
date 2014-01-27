require 'sinatra'

set :public_folder, File.dirname(__FILE__)

get '/' do
  redirect '04-changing-views_index.html'
end
