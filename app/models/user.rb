class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
	devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

   # Setup accessible (or protected) attributes for your model
	attr_accessible :name, :email, :password, :remember_me
	
	has_many :reservations, :dependent => :destroy

	accepts_nested_attributes_for :reservations
end

