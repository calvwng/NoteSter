class Vote < ActiveRecord::Base
  belongs_to :resource
  belongs_to :user
  validates :unique_identifier, uniqueness: true
end
