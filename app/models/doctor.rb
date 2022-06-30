class Doctor < ApplicationRecord
  has_many :appointments, dependent: :destroy
  has_many :users, through: :appointments
  
  
  validates :first_name, :last_name, :image, :specicialist, presence: true 
end
