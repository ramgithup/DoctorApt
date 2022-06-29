@spec = ['eyes', 'heart', 'general', 'Cancer']
@images = ['https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541__340.jpg',
'https://cdn.pixabay.com/photo/2015/07/10/20/54/stethoscope-840125__340.jpg',
'https://cdn.pixabay.com/photo/2017/02/01/13/52/analysis-2030261__480.jpg',
'https://cdn.pixabay.com/photo/2017/05/26/15/06/doctor-2346235__480.jpg']
Doctor.delete_all 

10.times do
  Doctor.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.male_first_name,
    image: @images.sample,
    specicialist: @spec.sample
  )
end

Doctor.all.each do |d|
  puts "first_name: #{d.first_name}"
  puts "last_name: #{d.last_name}"
  puts "image: #{d.image}"
  puts "spec: #{d.specicialist}"
  puts 
end