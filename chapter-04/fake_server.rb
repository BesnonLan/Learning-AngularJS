require 'sinatra'
require 'json'

set :public_folder , File.expand_path('../app', __FILE__)
set :views, ['app']

get '/' do
  erb :index
end
