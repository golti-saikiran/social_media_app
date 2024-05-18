User{
id
name
ProfilePhoto
CoverPhoto
Bio
CurrentCity-LivesIn
Hometown-From
MaritalStatus
Education [
	Collage
	degree
	from
	to
	]
Work[
	Company
	Location
	role
	Discription
	currentlyWorking or releavedOn
	JoinedOn
	]
}

Post{
id
Title
Description
Photo?
Video?
TagPeople?{User}
Likes
Comments{}


}

Profile{
User
Post
Friends{User}
}