class Recipe < ApplicationRecord
    belongs_to :user
    mount_uploader :photo, PhotoUploader

      # Recipe Photo Validation
  validates_integrity_of  :photo
  validates_processing_of :photo

  private
    def photo_size_validation
      errors[:photo] << "should be less than 500KB" if avatar.size > 0.5.megabytes
    end
end
