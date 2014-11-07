Website::Application.routes.draw do
	resources :reservations
	devise_for :users
	
	root "reservations#index"

end
