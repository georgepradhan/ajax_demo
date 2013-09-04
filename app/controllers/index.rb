get '/' do
  @grandma = params[:grandma]
  erb :index
end

post '/grandma' do
  user_input = params[:user_input] # reparses 'data' into key value pair and assigns accordingly
  if user_input == user_input.upcase
    @grandma = "No not since 1950"
  else
    @grandma = "Speak up!"
  end
  erb :_grandma_says, :layout => false
end
