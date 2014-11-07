Website::Application.routes.draw do
	resources :reservations
	devise_for :users
	
	root "pages#home"

end
