require 'sinatra'
require 'json'

set :public_folder , File.expand_path('../app', __FILE__)
set :views, ['app']

recipes_map = {
  '1' =>
  {
    id: 1,
    title: "Cookies",
    description: "Delicious, crisp on the outside, chewy on the outside, oozing with chocolatey goodness cookies. The best kind",
    ingredients: [ { amount: 1, amount_units: "packet", ingredient_name: "Chips Ahoy" } ],
    instructions: "1. Go buy a packet of Chips Ahoy\n2. Heat it up in an oven\n3. Enjoy warm cookies\n4. Learn how to bake cookies from somewhere else"
  },
  '2' =>
  {
    id: 2,
    title: 'Recipe 2',
    description: 'Description 2',
    instructions: 'Instruction 2',
    ingredients: [ { amount: 13, amount_units: 'pounds', ingredient_name: 'Awesomeness' } ]
  }
}

get '/' do
  erb :index
end

get '/recipes' do
  content_type :json
  recipes = recipes_map.values
  sleep 0.5 #simulate delay on the server

  recipes.to_json
end
