class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :doctor
  
  validates :appdate, :apptime, :user, :why, presence: true
end
