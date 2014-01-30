require 'sinatra'
require 'json'

get '/products' do
  headers 'Access-Control-Allow-Origin' => '*'
  content_type :json
  [
    {
      id: 1,
      title: 'Paint pots',
      description: 'Pots full of paint',
      price: 3.95
    },
    {
      id: 2,
      title: 'Polka dots',
      description: 'Dots with that polka groove',
      price: 12.95
    },{
      id: 3,
      title: 'Pebbles',
      description: 'Just little rocks, really',
      price: 3.51
    }
  ].to_json
end
