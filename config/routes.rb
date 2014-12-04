Website::Application.routes.draw do
	resources :reservations
	devise_for :users do
  		get '/users/sign_out' => 'devise/sessions#destroy'
	end
	
	root "reservations#index"

end
