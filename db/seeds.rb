@spec = ['eyes', 'heart', 'general', 'Cancer']
@images = ['https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541__340.jpg',
'https://cdn.pixabay.com/photo/2015/07/10/20/54/stethoscope-840125__340.jpg',
'https://cdn.pixabay.com/photo/2017/02/01/13/52/analysis-2030261__480.jpg',
'https://cdn.pixabay.com/photo/2017/05/26/15/06/doctor-2346235__480.jpg',]

@users_img = ['https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
  'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60']
  
  Appointment.delete_all
  Doctor.delete_all 
  # User.delete_all

10.times do
  @doctor = Doctor.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.male_first_name,
    image: @images.sample,
    specicialist: @spec.sample
  )
  5.times do
   @user = User.create(
     first: Faker::Name.first_name,
     last: Faker::Name.male_first_name,
     image: @users_img.sample,
     phone: Faker::PhoneNumber.cell_phone
   )

  #  Appointment.create(
  #   appdate: Faker::Date.in_date_period(month: 6),
  #   apptime: Faker::Time.forward( period: :morning),
  #   user: Faker::Name.middle_name ,
  #   why: Faker::Lorem.sentence(word_count: 5, supplemental: true),
  #   user_id: @user.id ,
  #   doctor_id:@doctor.id

  # )
  end
end

Doctor.all.each do |d|
  puts "first_name: #{d.first_name}"
  puts "last_name: #{d.last_name}"
  puts "image: #{d.image}"
  puts "spec: #{d.specicialist}"
  puts 
end
User.all.each do |u|
  puts "First: #{u.first}"
  puts "Last: #{u.last}"
  puts "image: #{u.image}"
  puts "phone: #{u.phone}"
  puts 
end