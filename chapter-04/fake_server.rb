require 'sinatra'
require 'json'

set :views, ['app']

get '/' do
  erb :index
end
