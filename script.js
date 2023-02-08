const playPauseBtn = document.querySelector(".play-pause-btn")
const theaterBtn = document.querySelector(".theater-btn")
const fullScreenBtn = document.querySelector(".full-screen-btn")
const miniPlayerBtn = document.querySelector(".mini-player-btn")
const muteBtn = document.querySelector(".mute-btn")
const captionsBtn = document.querySelector(".captions-btn")
const speedBtn = document.querySelector(".speed-btn")
const currentTimeElem = document.querySelector(".current-time")
const totalTimeElem = document.querySelector(".total-time")
const previewImg = document.querySelector(".preview-img")
const thumbnailImg = document.querySelector(".thumbnail-img")
const volumeSlider = document.querySelector(".volume-slider")
const videoContainer = document.querySelector(".video-container")
const mainVideoContainer = document.querySelector(".main-video-container")
const liveVideoContainer = document.querySelector(".live-video-container")
const timelineContainer = document.querySelector(".timeline-container")
const video = document.querySelector("video")
const startTime = document.querySelector(".start-time-text")
const slider = document.querySelector(".slider")
const sliderTime = document.querySelector(".slider-text")
const asyncThumbIndicator = document.querySelector(".view-thumb-indicator")
const syncThumbIndicator = document.querySelector(".thumb-indicator")
const asyncControls = document.querySelector(".async-controls")
const closeBtn = document.querySelector(".close-btn")
const playBtn = document.querySelector(".play-btn")
const skipForwardBtn = document.querySelector(".skip-forward-btn")
const skipBackBtn = document.querySelector(".skip-back-btn")
const speedContainer = document.querySelector(".speed-container")
const speedText = document.querySelector(".speed-text")
const incSpeedBtn = document.querySelector(".increase-btn-img")
const decSpeedBtn = document.querySelector(".decrease-btn-img")
const smallWindowPrompt = document.querySelector(".small-window-prompt")
const bigWindowPrompt = document.querySelector(".big-window-prompt")
const slidesContainer = document.querySelector(".slides-container")
const timerBtn = document.querySelector(".timer-btn")
const bookmarkBtn = document.querySelector(".bookmark-btn")
const activityBtn = document.querySelector(".activity-btn")
const flagBtn = document.querySelector(".slider-btn")
const asyncSubtitle = document.querySelector(".async-subtitle-text")
const syncSubtitle = document.querySelector(".sync-subtitle-text")
const audioButtonMain = document.querySelector(".audio-btn-main")
const audioButtonLive = document.querySelector(".audio-btn-live")
const catchUpLine = document.querySelector(".catch-up-line")
const rightArrow = document.querySelector(".right-arrow")
const leftArrow = document.querySelector(".left-arrow")
const catchUpTimeText = document.querySelector(".catch-up-time-text")
const transcriptBody = document.querySelector(".transcript-body")
const transcript = document.querySelector(".transcript")
const liveLableMain = document.querySelector("#main-label")




const today = new Date();
const time_0 = today.getHours() + ":" + today.getMinutes()// + ":" + today.getSeconds();

const inf = 1000000


//video information specific to each video
var slidesTimesList = ["0:0","0:26", "1:17", "3:49", "11:19", "13:06", "14:27", "14:50", "18:21", "19:42"]
var eventTimesList = ["1:14", "4:24", "5:14", "9:36", "15:47", "16:50", "50:0"]
// var eventTimesList = ["0:10", "0:20", "0:30", "0:40", "50:0"]
const promptsList = ["Remeber, the first method of scientific method is what?", "Molecules come together to form what?", "What is the cell membrane mostly made of? ", "What are the monomers of the proteins?", "What's a mosaic?", "Remember, we talked about oligosaccharides. What are they used for?"]
const subtitleTexts = ["Professor Cell biology, this lecture looks at what is a cell made of", "and how does the cell maintain itself? How does it function on an independent level,", 'because as we know, all living things are made of cells and all cells have the ability to self replicate', "from one generation to the next. So it's important that we look at all the ins and outs of them.", 'So that brings us to cell theory. The theory is that all living things are made of cells. That is our definition of life', 'that from the simplest of cells, like bacteria and certain protists, even fungi,', 'to the more complex organisms of animal and plant life, everything is made of cells,', 'and cells are the smallest unit that can function independently. We also know that all cells come from pre-existing cells,', 'and so, the first thing I want to briefly discuss', "is more of a side note, but it's to help you understand why we came up with cell theory", "and why we still are in the dark about a lot of things. It's because, remember the first step", 'of the scientific method is what? (students chattering) Observation, and until we have the capacity to observe', "the very very small, we really don't know what's going on. Now, we do have very very high powered microscopes,", "but there's two main divisions of microscopes that are used today. There's a wide variety, but two main divisions.", 'The first are called light microscopes. These have the advantage of being able to see live cells in action, but the problem that,', 'the disadvantage that we have with these is that the resolution is not as good as it could be.', "We're looking at things that are a couple of micrometers. That's a millionth of a meter, okay, so very very small.", "Micrometer units are very very small, and that's why we can't see them with the naked eye, but we can if we magnify it", 'through the use of these microscopes. Now the more powerful microscopes called electron microscopes give us', "a much higher resolution, but there's a trade off. The higher the resolution, such as with the electron microscopes,", 'we have to hold the cells still. We usually have to coat them with some type of metal.', "In a sense, we kill them. So we can't see live cells with these high-powered microscopes.", "We can see snapshots of what's going on inside of them, but we really can't see a lot of the inner workings", "and what's going on. So it's the equivalent of being in the nosebleed section and watching a football game and being like,", '"I see people moving down there, "but I\'m not exactly sure where the ball is or anything." versus taking snapshots of high resolution', "of the quarterback carrying the ball, but you don't see where he's going. You just see this, you know,", 'quarterback holding the ball and you\'re like, "Oh, there\'s the ball, but what does the ball do?" Between the two, we get a good picture of what\'s going on,', "but there's still more to learn. There's still quite a bit to learn about what's going on inside of a cell.", 'The reason for that is because, even with our most high-powered electron microscopes, we can only see snapshots of proteins and organelles', "and whatnot of the cell and what they're doing. We're still not fully at the capability", 'of seeing individual atoms. We can see a few molecules, like water,', "with these high high high-powered microscopes, but we're still not quite at the point", 'of being able to see the atoms. So this kind of gives you an idea as far as', 'what microscopes allow us to do, to observe the very very small.', "All right, let's talk about what the unifying concept of all cells are because, since all living things are made of cells,", 'there are a couple of facts that are common in all cells.', "So this is one of the first things I'll test you on is what do all cells have in common.", 'All right, now, we talked about in the last lecture, about some of the organic molecules,', "and that's what you're gonna see here is that, as the organic molecules come together to form larger structure,", "what's the next level of organization that we learned back in Lecture One?", 'Molecules come together to form what?', 'You have atoms, molecules, and then what?', "(students mumbling) Organelles, all right, organelles. So, that's what we're gonna mainly learn about today", "is what are the organelles of a cell, 'cause as we learned, organelles are to the cell", 'as organs are to an organism, meaning our heart is an organ. Has a very particular job, very specific function.', 'So is an organelle. It plays a specific role within the cell to keep the cell alive.', 'So all of the organelles that combine together ultimately give the cell its overall function.', 'All right, so one of the first organelles is the cell membrane.', "You just learned in this last lecture, what is the cell membrane mostly made of? What's the organic material", "that mostly makes up the cell membrane? It's that fat layer that surrounds all cells.", 'Phospholipids, good, which are', 'the lipids that have the fatty acid tails which are hydrophobic,', 'but the polar phosphate charged heads which are hydrophilic. As such, they create this fat barrier', "that surround the cells. We call this the cell membrane. It's what keeps the external", 'and internal environment separate. This is how a cell is able to maintain homeostasis,', 'by regulating traffic in and out of this membrane. So, cells maintain homeostasis', 'by bringing things in, bringing things out, keeping things out, doing all the things', "it needs to do to maintain the proper internal environment. That's why it's so important.", 'The cell membrane is not just made of phospholipids, although that is one of the major components of it.', "We'll learn a little bit later on, probably Thursday, about what are the other components. Now, there's an environment inside of here", "that's mostly water, but we don't just call it water because there's water on the inside. So how do we differentiate between the two?", 'We call the inside of the cell the cytoplasm.', "So the cytoplasm is essentially the internal fluid environment, and though it's mostly water,", "there's a lot going on in here. There's a lot of just mechanics of proteins", 'and metabolism and all sorts of stuff. So, though we look at cells and they may look somewhat clear,', "it's just because we cannot see with the live microscope, the resolution,", 'but let me jump ahead and show you a couple things. When you look at the inside of a cell,', "it's not just a liquid environment. I mean, there are these structures that are just amazingly complex.", "Here's just some example of some of the inner workings using a very high-powered electron microscope.", "So, though we may look at a cell, here's a plant cell with the light microscope, but if we look deeper with, lets say,", 'an electron microscope, we can see structures like this,', 'which are very highly complex and organized.', 'So, cytoplasm, the fluid environment inside of a cell. All right, so all cells have a cell membrane.', "All cells have a cytoplasm. Now let's talk about the other four components. All cells have at their core genetic information,", "which we call DNA. Now it's not structured necessarily the same way. All DNA is a double helix,", 'however, bacteria, they have this large ring of DNA', 'whereas we have chromosomes. So, the way in which we organize our DNA,', 'the bacteria loop their DNA around and create this one large circular double helix structure.', 'We have linear pieces of double-stranded DNA that make up our chromosomes.', "So that's really the main difference. We all have DNA, but not all cells have chromosomes.", "So there's a big difference between how we organize our DNA from one species to another. So we all have DNA.", 'Well, as we mentioned in the last lecture, DNA actually is used to make the proteins,', "but before the proteins are made, we make a copy of it. It's like copying that page out of the recipe book", 'that you want for that day, and that produces a what? It produces an RNA.', 'So all cells have an RNA or not an RNA, they have RNA. If the cell wants to make proteins, which all cells do,', 'they first must copy that portion of the DNA into RNA. Okay, well, the RNA again, is still just a template.', "It's still just a recipe. It's not the actual protein. So what the cells need to do", 'is to take that information and create a protein. And we learned in the last lecture how proteins are made.', 'What are the monomers of the proteins? - Student Amino acids.', '- Professor Amino acids and how are they assembled together? (student mumbling) They are forming polypeptide chains.', 'So, how do we know what order to put them in?', '(student mumbling) According to the RNA which, according to the DNA is the template from that.', 'These are just copies of one another. The RNA is just a copy. So what actually assembles them together,', 'because all cells have DNA, all cells have RNA and all cells make proteins, but you actually have to manufacture the proteins.', "Well, here's where we get into our second organelle called ribosomes.", 'All cells have ribosomes, a combination of both protein and nucleic acid.', "So what is a ribosome's function as an organelle? Well, it's an enzyme which undergoes dehydration synthesis", 'by covalently bonding amino acids together into a polypeptide chain.', 'So what is the role of ribosome, to make proteins.', 'So how do cells make proteins? They essentially copy the DNA to RNA,', 'and then the ribosome reads the RNA, covalently bonding the amino acids', 'in the pre-established sequence. This right here is gonna be all of Lecture 10.', "We're gonna spend an entire lecture going through how that works. How do you copy the DNA to RNA?", 'How do you make a protein from that RNA by using the ribosomes? For now, you just need to know these six components.', 'Now, cells ultimately are restricted in their size', 'because the larger they are, the harder it is for them to be able to maintain homeostasis,', 'but there is a few tricks that cells can do to get around this because, as their volume increases,', 'they have that much more area that they have to maintain.', 'So, some of the tricks that cells can do to ultimately be very very long or whatnot', 'like your muscle cells. Your muscle cells actually span the whole length of your muscle. So if you look at your muscle as an organ,', 'the individual cells that form all the fibers that make up your organ, are the length of your organ.', "That's how long those cells are, one continuous cell, but they're very flat in nature. So even though they're very long,", 'they have a lot of surface area which allows them to exchange nutrients with their environment.', 'So they have this flattened or cylindrical shape. Another example of this, to be able to', 'increase the surface area are in your lungs. Your alveoli, which are the small cells in your lungs', 'that are surrounded by capillaries and this is where oxygen and carbon dioxide exchange occur,', 'due to the flat nature of those cells, then the oxygen and carbon dioxide', 'can go through the cytoplasm of the cell fairly rapidly. And this is necessary in order for this exchange', 'to be able to occur. In fact, if you look at the total amount of surface area compacted into your lungs due to these flattened cells,', "it's about the size of half of a tennis court. That's how much surface area you have just inside your lungs alone.", "And that's essential to be able to get enough exchange of oxygen and carbon dioxide with the atmosphere to do so.", 'Another concept that cells can use are to actually project portions of their cell membrane,', 'almost like finger-like extensions to increase their surface area without increasing their volume very much.', 'And you see this in cells like in your intestines where they have these protrusions', 'that increase the overall surface area, but these little bumps right there, that actually increases the surface area of the cell', 'so that you can get more and more absorption. So how much of a difference does that make in your intestines?', 'Well, if you were to take a 16-square-foot section of your intestines and look at the actual surface area', "of food absorption, it's more like 2200 square feet. That's the difference between having", 'just flat cells that have no extensions and these tiny little, finger-like extensions', "that increase the surface area. I mean, 16 square feet to 2200 square feet, it's kind of a no brainer on that on why it's necessary.", 'So, those are some of the tricks that the cells can do to change their cell membrane', "without really getting bigger in terms of their volume. But still, they can't get too big.", 'Otherwise, they start having issues of taking out the garbage, getting nutrients and taking care of themselves.', "All right, so let's talk about the cell membrane as its first organelle. We talked back in the last lecture", 'about phospholipids. Those are the glycerol and fatty acid tails', 'with the phosphate head, so that a big portion of them are hydrophobic, but the head is hydrophilic.', 'So they orient themselves to where they form this very fluid fat layer, where the phospholipids are on the outside', 'and the inside of the cell, you know, facing, and then the tails are sandwiched in between,', 'creating this hydrophobic layer in which the water is typically impervious to,', "although there are, there is some leakage as we'll show in the next lecture. Now it's not just made of phospholipids.", 'We call the cell membrane a fluid mosaic. The fluid part comes about because the phospholipids are free to move', "within that bilayer. They're not covalently bonded to each other. There's not even hydrogen bond going on there.", 'The main thing that holds them together is the fact that these phospholipids will not pop out of the membrane', 'because to do so would expose those tails to the hydrophilic or the water environment,', "and they don't like that. So they stay together in this fashion. Yes, you can burst the membrane by busting it open,", "but that usually destroys the cell. But it's not just made of phospholipids.", "What's a mosaic? Like, you know, you go into a church, what's a mosaic?", '(student mumbling) Okay, a bunch of different pieces put together to create some art form.', "It's got different-colored glasses. You might have different tiles coming together.", "The same concept, the reason why we call the cell membrane a fluid mosaic is because it's not just made of phospholipids.", "It's made of a myriad of different proteins, each with different functions. And so, if you really look at the membrane,", "it doesn't look like this. It looks more like this. There is all sorts of stuff going on inside the membrane.", "You've got these purple proteins, which just represents a variety of different proteins.", "You've got other proteins that are just beneath the surface. You've got even cholesterol in here.", "There's a wide range of organic molecules. Those green groups are the carbohydrates.", 'These are things like oligosaccharides. Remember, we talked about oligosaccharides. What are they used for?', "It wasn't that long ago. (student mumbling) Cell recognition, good. So these oligosaccharides are attached", "to the surface of your cells like your red blood cells and your other cells and tissues in your body, and that's what gives your body its cell recognition.", "So you have almost every carbohydrate group here. You've got fats, you've got proteins, you've got carbohydrates.", 'This is a very dynamic organelle that plays a very specific role of maintaining homeostasis in the cell.', "You've got other proteins, which form channels to allow things in and out of the membrane. So this is one of the first concepts you gotta know", 'about the cell membrane. One of the ways in which it maintains homeostasis is by selective passage through the membrane.', 'It selectively allows things to come in, selectively allows things to come out, prevents things from coming in,', 'prevents things from going out. So it acts very much like this building does. It maintains an internal environment', 'by heating it up and cooling it down, depending upon what the atmosphere is like outside and the weather and whatnot.', 'It provides structure and stability. Certain things are restricted from coning in and out of the classrooms', 'and doors, you know, larger vehicles and things that have no need to come into this classroom and the like.', 'So just like a building regulates the homeostatic environment inside, so does the cell membrane.', "Its main job is to do that. All right, now, let's look at", 'the different types of cells. There are two main divisions of cells', 'that all life can be categorized into. You have what we call prokaryotic cells,', 'which are the more primitive types of cells and then you have eukaryotic cells, which are the more advanced type of cells.', "That's what you and I are made up of. Well, within those groups, we've got different domains,", "and we'll talk more about those at the end of the semester when we look at species. But, there are two types of prokaryotic cells", 'or two domains, the bacteria, which everyone is familiar with and another group of prokaryotic cells called archaea.', "These typically live in extreme environments. So we don't really have a lot of association with these types of prokaryotic cells.", "But, what makes a prokaryotic cell a prokaryotic cell? Well, they're primitive, which means that they really don't", "have much to them. If you look inside a prokaryotic cell, there's not much there by comparison to a eukaryotic cell.", "They do have the fundamentals though. They've got a cytoplasm. They have a cell membrane.", 'They have ribosomes, they have DNA, they have RNA and they have proteins. Those are the fundamentals.', "Now, in some cases, these can have organelles that you and I even don't have.", "Even though they're very simple cells, they have certain organelles that allow them to function.", 'One of those is what we call a cell wall. Now, a lotta times people confuse', 'the cell wall and the cell membrane. They are distinct organelles. All cells have a cell membrane,', "which is made up of phospholipid bilayer and maintains homeostasis. That's the universal process of that organelle.", "So what's the cell wall for? Well, unlike what the name suggests, it's not an impermeable barrier"]
var subtitleTimes = ['0:00', '0:05', '0:11', '0:17', '0:25', '0:31', '0:38', '0:44', '0:52', '0:58', '1:07', '1:13', '1:21', '1:29', '1:34', '1:43', '1:48', '1:59', '2:05', '2:13', '2:19', '2:25', '2:31', '2:37', '2:43', '2:50', '2:56', '3:04', '3:09', '3:18', '3:23', '3:29', '3:36', '3:42', '3:47', '3:55', '4:00', '4:06', '4:11', '4:17', '4:22', '4:27', '4:34', '4:41', '4:46', '4:54', '4:59', '5:05', '5:10', '5:18', '5:25', '5:30', '5:36', '5:43', '5:50', '5:58', '6:06', '6:12', '6:17', '6:23', '6:32', '6:38', '6:44', '6:51', '6:56', '7:02', '7:07', '7:14', '7:20', '7:28', '7:34', '7:40', '7:48', '7:54', '8:03', '8:10', '8:16', '8:23', '8:29', '8:34', '8:40', '8:46', '8:54', '9:00', '9:06', '9:13', '9:20', '9:28', '9:34', '9:39', '9:46', '9:53', '9:58', '10:04', '10:12', '10:17', '10:23', '10:33', '10:38', '10:43', '10:50', '10:56', '11:03', '11:09', '11:16', '11:23', '11:29', '11:37', '11:43', '11:50', '11:55', '12:01', '12:08', '12:14', '12:22', '12:28', '12:34', '12:39', '12:46', '12:54', '12:59', '13:06', '13:14', '13:20', '13:26', '13:33', '13:40', '13:46', '13:53', '13:58', '14:07', '14:12', '14:19', '14:26', '14:32', '14:37', '14:42', '14:48', '14:55', '15:01', '15:07', '15:13', '15:21', '15:28', '15:34', '15:40', '15:46', '15:56', '16:01', '16:06', '16:13', '16:20', '16:28', '16:33', '16:39', '16:46', '16:54', '16:59', '17:07', '17:12', '17:20', '17:27', '17:36', '17:42', '17:48', '17:55', '18:02', '18:07', '18:13', '18:22', '18:28', '18:34', '18:39', '18:45', '18:52', '18:58', '19:05', '19:10', '19:17', '19:22', '19:28', '19:34', '19:39', '19:45', '19:52', '19:59']
// read video data" subtitles , slide times, alert times from info.txt file

//-------Bio lec 6 part 2
// var slidesTimesList = ["0:10", "1:53", "2:45", "3:16", "4:50", "8:25", "9:10", "10:08", "14:43", "15:63",  "18:18", "20:04"]
// var subtitleTimes = ['0:04', '0:10', '0:15', '0:22', '0:28', '0:36', '0:43', '0:50', '0:55', '1:02', '1:08', '1:15', '1:21', '1:27', '1:32', '1:42', '1:47', '1:53', '2:00', '2:06', '2:11', '2:17', '2:23', '2:28', '2:33', '2:41', '2:47', '2:54', '3:00', '3:06', '3:11', '3:16', '3:23', '3:30', '3:37', '3:42', '3:48', '3:55', '4:02', '4:07', '4:14', '4:19', '4:24', '4:31', '4:36', '4:42', '4:47', '4:53', '4:59', '5:04', '5:09', '5:15', '5:20', '5:26', '5:31', '5:36', '5:42', '5:48', '5:54', '6:01', '6:09', '6:15', '6:21', '6:27', '6:33', '6:40', '6:45', '6:52', '6:59', '7:07', '7:14', '7:20', '7:28', '7:34', '7:42', '7:48', '7:55', '8:02', '8:09', '8:14', '8:21', '8:28', '8:35', '8:42', '8:49', '8:55', '9:00', '9:06', '9:12', '9:18', '9:26', '9:32', '9:37', '9:46', '9:52', '9:58', '10:07', '10:13', '10:19', '10:25', '10:30', '10:37', '10:43', '10:50', '10:55', '11:01', '11:07', '11:15', '11:23', '11:30', '11:37', '11:43', '11:48', '11:53', '12:00', '12:10', '12:19', '12:25', '12:33', '12:39', '12:46', '12:52', '12:58', '13:05', '13:13', '13:18', '13:23', '13:29', '13:35', '13:42', '13:49', '13:55', '14:02', '14:10', '14:16', '14:22', '14:28', '14:34', '14:41', '14:47', '14:53', '14:59', '15:06', '15:12', '15:19', '15:25', '15:30', '15:38', '15:43', '15:48', '15:54', '15:59', '16:06', '16:12', '16:19', '16:25', '16:30', '16:36', '16:41', '16:49', '16:55', '17:01', '17:06', '17:13', '17:18', '17:23', '17:30', '17:35', '17:45', '17:51', '17:58', '18:03', '18:09', '18:14', '18:20', '18:26', '18:32', '18:40', '18:46', '18:53', '19:00', '19:06', '19:12', '19:17', '19:25', '19:31', '19:37', '19:44', '19:49', '19:54', '20:00', '20:06']
// const subtitleTexts = ["We don't have a cell wall around our cells, around our individual cells.", 'Now notice the complexity of the animal and plant and whatnot.', 'These are the eukaryotic cells, the more advanced cells that typically have lots and lots of different organelles to them.', "In fact, when we study these organelles today, you're gonna see that, really, bacteria have little to none of them", 'and we have all sorts of different types of organelles. Now the arrangement and the types of organelles', "that a cell has ultimately determines what the cell's going to do. There are some cells in your body that are more abundant in mitochondria", "because they're the ones that are undergoing most of the metabolism. There's other cells in your body that have a higher abundance of,", 'maybe, internal cytoskeleton, like your skin because they form more of a protective layer.', 'So depending upon the composition of the organelles ultimately tells you what the cell is going to do.', 'So how do our cells keep their shape? Animal cells actually keep certain shapes. How do we make flat cells for our muscles', 'and flat cells for our lungs or maybe cuboidal cells for our intestines with all these finger-like projections?', 'Well, it comes down to an internal scaffolding of proteins, which we call the cytoskeleton.', "That'll be the last organelle we talk about today. That's how animals keep their cell shape.", 'In fact, you can see here, this is an electron-scanning micrograph of a cell.', "You can see a wide variety of different organelles. Here's the nucleus, which takes up a huge portion of the cell and the like.", "So here's just kind of, this shows those inner fibers or proteins that kinda keep the shape of the cell.", "That's how animal cells keep their shape because we don't have a cell wall.", "Plant cells, notice there's several different other organelles. They have this huge organelle called a vacuole,", "which is kind of a storage container. I'm just giving you an overview. We're gonna go into these in detail here.", "They've got other organelles in certain cells, in the leave cells and whatnot.", "These organelles play a key role for biology in life because they're the ones that are actually", 'capturing the sunlight and turning it into sugars and fats and proteins. These are the chloroplasts', "that you only find in photosynthetic organisms. They're not in animal cells. They're not in fungi.", "They're not in a lot of different organisms. Notice the two layers here as well.", "Plant cells as well have a cell membrane and a cell wall. So there's a lot of complexity in each one of these cells", "that we're gonna go through. All right, so let's talk first about some of the interactions that cells have with one another", 'due to their cell membranes and cell walls because this is another function of these organelles.', "Cell membranes don't just regulate internal and external environments. They also provide attachments", 'so that you and I, made of trillions of cells, can form these more complex structures', "of what you and I are. More simple organisms typically don't have the complexity that we have", "in terms of how the cells get put together and attached to each other. Now plants, they don't necessarily use", "their cell membrane to attach to one another. They use their cell wall. So here's another example of what a cell wall can do.", 'It provides attachments so that the cells literally can fuse their cell walls together', "and form these very very rigid tough structures. That's why plants are so resilient, because they have individual cell walls,", "but they're fused together. They create these larger structures.", 'One of the interesting things about these is that they can create these little pores', "that allow the cells to share nutrients and communicate with one another, and this is key for the plant's ability", 'to transport water from the roots through its vascular system. So these are called plasmodesma', 'or the plural is called plasmodesmata. That will show up possibly on one of your questions.', 'Others might get a different version looking at animal cell connections, but you gotta know this as well.', 'So plasmodesmata are the connections that cells make with one another', 'so that they can share nutrients, that they can siphon water through their vascular structure and the like.', "There's another role as well. On the surface of flowers where they secrete nectars", 'that attract pollinators like bees and other insects, the plasmodesmata serve that purpose too.', 'So the plant can actually make sugars and then secrete them, and then the insects are attracted to that', 'and ultimately get the nectar through those pores as it comes up to the surface of the cells', 'where the flowers are at. All right, now how do you and I and other animals', "make those connections 'cause we don't have a cell wall? So how do we make connections? Well, there's three main types of connections", 'that hold our tissues together. The first one is actually the second on that list.', "It's called anchoring or adhering junctions. These are what the majority of your cells do.", "These are loose junctions that kind of like, if you've got a jacket and you button it up.", "There's still some flexibility there. There's still some gaps and pores between the buttons.", "It provides a connection, but it's not like airtight so to speak,", "like zipping up a jacket will be. That's another type of junction. So, where does this apply?", "Well look at your skin, grab a piece of it. Notice how pliable it is. If it weren't that pliable,", "it wouldn't be that pliable if it didn't have these loose junctions that allow you to, you know, move your skin around", "on top of it. So the tissues aren't cemented together. There's some flexibility there", 'that allow them to remain connected, but still be able to be pliable and movable.', 'Now, in some areas, you really do need the cells to zip up by having these tight junctions.', "So what are making all of these junctions? It's really just the proteins in the membrane. Remember I told you how there are various proteins", 'within the membranes of the cells. There are various types of proteins that perform these types of junctions', "or these buttoning up or zipping up. So if you look at tight junctions, it's kind of like zipping your jacket up.", 'You get this almost impermeable barrier with no gaps in it whatsoever. So where will we typically find these?', 'Well, we typically find them in areas in our body where we need a lotta filtration, like our intestines and our kidneys.', "The reason for that is because as nutrients move across the cells, we don't want it leaking through in between the cells.", 'That would happen if we just had these button-like junctions or these anchoring junctions.', "So we have to zip the cells up so that there's no pores or no gaps in between them, so that the intestines only absorb", 'that which they need and bring it into our bloodstream. All the rest just kinda goes by the wayside. The same thing is true for your kidneys.', "They have these tight junctions to prevent things leaking through because it's a filtration organ amongst other things.", 'So, anchoring are the loose junctions. Tight junctions are the ones where you find that the cells need to filter a lot of things out,', 'like in your intestines or your kidneys. And then the last one are called gap junctions.', 'These are proteins that fuse between two cells that provide a pore, very much like the plasmodesmata,', "but we don't call them plasmodesmata. We just call them gap junctions. So, whereas plants have these pores", 'because of their cell walls fusing, animals can have these same types of instantaneous communication and sharing of nutrients', 'by having these gap junctions. So, where would we need these? Well, one main area is your heart muscles.', 'Because of the nature of how your heart works, it needs to be able to share and redistribute the calcium', 'amongst all the muscles in that area at the same time. Otherwise, your heart would not be able to beat and have those differential pressures', 'for your cardiovascular system. So these pores allow instantaneous communication between cells.', "That's their main role as far as communication from one cell to the next,", "'cause if you don't have these pores, then things have to go through the membrane, through the space in between and through this membrane.", "It takes a lot longer than just being able to travel through a nice little channel. Most organelles that we're gonna talk about", 'are what we call membrane-bound organelles. What do we mean by membrane-bound organelles?', 'Well, you know that the cell membrane is made up of the phospholipid bilayer. So are these organelles.', "So when we say membrane-bound organelle, we mean they're made up of the same fundamental composition", "that the cell membrane's made up of. They're made up of a phospholipid bilayer, in many cases multiple layers,", "and they've got proteins in there. So they're just as complex as the cell membrane.", 'So when we say membrane-bound, we literally mean the same material that makes up the cell membrane,', 'being phospholipids and proteins and the like. Now, not all organelles work together', "like this group I'm gonna talk about first, but because this group of organelles works together", 'in tandem, almost like an assembly line, we have a specific name for this group. We call it the endomembrane system.', 'So the endomembrane system just talks about the membrane organelles that are', 'inside the cell endomembrane and how they work together.', "They are distinct, individual organelles. So there are four in total here. There's the nucleus, the rough ER, the smooth ER,", "the Golgi apparatus. These are the four that belong to the endomembrane system. So I'm gonna start with the nucleus obviously,", 'and then show you how they work together. All organelles work to keep the cell healthy and alive', 'and doing its thing, but these have a special place because of its assembly-line nature, which is why we call it the endomembrane system.', "Okay, so let's start with the nucleus. I told you that this is one of the unique characteristics of eukaryotic cells.", 'Prokaryotic cells do not have a nucleus. Now sometimes we call it the nuclear envelope', "because it's a, not only just a single membrane system, but a double membrane system.", 'It has twice the membrane that the cell membrane has.', "Look it here, it doesn't just have one layer of phospholipids, it has two layers of phospholipids.", "Now here's an example of what I mentioned last time as a quaternary protein structure.", "Notice you've got all these little individual tertiary structures all coming together to form this large pore.", 'So this is an example of a quaternary structure where you have all these different polypeptide chains', 'folded individually and then collectively, they make this huge pore, this huge protein.', 'All right, so why is the nucleus just so protected? Why does it have two membranes', "when the cell membrane itself is only one layer thick? Well, it's because, this is the heart of the cell.", 'The nucleus contains all of the genetic information that a cell needs to be able to maintain homeostasis.', 'Imagine, some people might not like this fact, but imagine if all of the secrets and all of the data', "that our government had would be available to everybody. Some of you might argue, yeah, that's a good thing.", 'However, there are certain secrets and other information that needs to be very well protected,', 'kinda like in the Pentagon and other secure areas. And only certain things have access to it.', 'Well, the same thing is true for this because if everything had access to the DNA,', "it would get destroyed, let's just be honest. If we all had access to all the information,", "you know, or whatnot, I mean, I don't know about free information, but anyway, I'm done with that analogy. So ultimately, if everything had access to the DNA,", "our DNA would actually be destroyed. So ultimately, it's regulated. Access to that DNA is regulated by these pores.", "That's why it's got this double-protected layer to prevent things from coming in and out that don't belong there.", 'So we, because of the nature of how we copy our DNA to RNA and how we use that', "have this huge protective layer. Now there is access in and out, but it's very restricted access,", 'only a few set of molecules actually can go in and out of the nucleus to access that genetic information, okay.', "So that's why you see all these pores around here is because it protects the DNA and it regulates access in and out.", "Here's a very high-powered magnification showing you some of these gaps or pores", 'that these quaternary protein structures regulate access in and out of.', "So what is the nuclear envelope's job? To protect the DNA and regulate access to the information.", "That's pretty much its job. Now bacteria, like prokaryotic cells,", "why therefore do they not have nucleus, you know, for like, well, they don't protect their DNA.", "It's just the nature of how they use their DNA. They have other protective measures, but they don't need a nucleus.", "So the other DNA is exposed to all these other things, they're much simpler. They don't have the complexity that you and I have", "and, due to that fact, they really don't need to house and protect their DNA because of how they function.", 'All right.', 'So how do you get the information to the cell so that it can do what it needs to do?', 'Well, this references what we went over last time with the organic molecules, how DNA and RNA are related to one another.', "The DNA always stays in the nucleus. So how do you get that information out of the nucleus if it's just nice and cozy and protected in there?", "You make a copy of it. That's where RNA comes in. So, in order for the cell to be able to make a protein,", 'as they always do because they need that to be able to function, they\'ll say, "Hey, I want to make some insulin."', '"Hey, I want to make some glucagon." "Hey, I want to make some hemoglobin." So they find the information inside here.', 'They copy it to RNA, and then the RNA leaves the nucleus out into the cytoplasm,', "and the DNA's like, I did my job, you know. It gave the information that it needs. So when the RNA leaves the nucleus,", 'then where does it go? Well, the next organelle in the row in this endomembrane system is called', 'the rough endoplasmic reticulum or we shorthand it and call it the rough ER.', "So what's the endoplasmic reticulum? Well, it's a two part organelle.", "It's got two main pieces to it that each have respective jobs. Now, when you look under a scanning electron micrograph,", "the reason why we call it rough ER or rough endoplasmic reticulum is 'cause it's got all these little bumps on it.", 'So when you look under this high-powered electron micrograph, you see all these little bumps.', "Those bumps are ribosomes. Now we've already learned what ribosomes do. What do they do?", '(students mumbling) They make proteins. So guess what? When the RNA leaves the nucleus,', 'it goes to the rough ER where the proteins are at. The proteins then read the RNA', 'and know what order to put the amino acids in. And, as we learned in the last lecture,', 'the order of the amino acids predetermines how the proteins are going to fold', 'into their tertiary structure or quaternary structures, based upon how many polypeptide chains there are.', 'So whenever a cell wants to make a protein, it copies the DNA in the nucleus to RNA.', 'The RNA leaves the nucleus, comes to the rough ER, where the ribosomes manufacture the proteins.', 'So now what do we do with the protein? Well, the rough ER needs to stay right there.', "It can't really move, it can't do a lotta stuff. It just is designed to make the proteins, but the second half of the endoplasmic reticulum", "is called the smooth ER. Why do you think it's called smooth ER?", "- [Student] It's smooth. - [Professor] 'Cause it looks smooth. So what do you think it doesn't have?", "It doesn't have ribosomes. It looks smooth because there are no little or large organelles called ribosomes", "that are attached to it. So what's it's job? It's not to make proteins 'cause it doesn't have any ribosomes.", 'Its job is to package the proteins up. So, the main job of the smooth ER', 'is to manufacture phospholipids so that it can package up the proteins', 'into these, what we call, vesicles, just these little compartments of phospholipids that will surround the protein', "and be able to transport this. There's another job, however, of the smooth ER.", 'When cells grow, they need to increase the amount of phospholipids in their cell membrane.', "And the only way in which they can do that is to manufacture the phospholipids. That's where the smooth ER comes in.", "So the smooth ER doesn't just package up proteins. If the cell needs to enlarge,", 'then it needs to manufacture more phospholipids so that it can grow. So this has its role, the smooth ER has its role,', 'not only in packaging proteins, but also making more material', "for the cell to be able to grow, making more of the membrane. So that's why we say synthesize lipids.", "All right, and if it didn't synthesize lipids, every time the smooth ER buds off", 'a portion of itself, it would start getting smaller and smaller over time. So as it packages up the proteins', 'and sends off a portion of itself, it needs to renew itself, so to speak. It needs to make more lipids.', 'It usually does this from the triglycerides because, remember, triglycerides and phospholipids are almost exactly the same.', 'It has just to detach a fatty acid tail and add a phosphate group and there you go.', "There's a phospholipid. All right, so then, why does it heed to package it up?", 'Where does it need to send it to? Well, the last area of the endomembrane system', "is called the Golgi apparatus. Golgi, the reason why it's capitalized is it's the proper name,", "the name of the scientist who discovered it. Hence, it's named after him. So the Golgi apparatus is a processing center.", "It's a modification center. Now let me ask you, how does a protein need to be modified, why?", "Well, let's come back to here. Proteins, when they're first made in the ribosome,", 'are just amino acids strung together and then folded into a tertiary structure, but in some cases, like for example,', "this glycoprotein, as we call it, because it's got oligosaccharide plus the protein,", 'so we call it a glycoprotein, like glycogen. The recognition proteins here,', "like for your red blood cells, they're not made right away in the ribosomes.", "The protein part's made in the ribosome and here is where the Golgi apparatus comes in. The Golgi apparatus makes modifications to the protein", 'for its final stage. So in the case of this type of protein,', 'the Golgi apparatus attaches the oligosaccharide to the protein and then sends it off to the membrane,', "and now you've got your recognition protein. You're now blood type A or blood type B or whatnot.", "So that's what the Golgi apparatus does. It can reshape the protein,", 'fold It a little differently, attach something onto it like this oligosaccharide.', "It's a processing center.", "Let's see. So it may look smooth, but there are", 'lots and lots of proteins in the Golgi apparatus doing these modifications, attaching the oligosaccharides to it']


subtitleTimes = convertToSeconds(subtitleTimes)
eventTimesList = convertToSeconds(eventTimesList)
//video update in 0.4s intervals
setInterval(update, 300)
function update(){
  const percent = video.currentTime / video.duration
  timelineContainer.style.setProperty("--progress-position", percent)
  timelineContainer.style.setProperty("--live-progress-position", syncVideo.currentTime/video.duration)
  updateMissedPercent()
  updateAsyncView()
  viewReminder()
  checkforLiveEvents()
  updateSlideThumbs()
  updateTimer()
  checkFlagButton()
  addSubtitles(syncVideo, syncSubtitle)
  addSubtitles(video, asyncSubtitle)
  updateTranscript()

}

//Sliders adding and updating
let slidersList = []
let sliderPosList =[]
let slidingSliderIndex = -1
let isSliding = false

slider.addEventListener("click", clone)
function clone(e){
	e.stopPropagation()
  console.log("cloned")
  const cloneSlider = slider.cloneNode(true)
  cloneSlider.children[0].src = "assets/flag3.png"
  timelineContainer.appendChild(cloneSlider)
  cloneSlider.style.left = "50%"
  cloneSlider.style.bottom = "50%"
  cloneSlider.style.display = "none"
  cloneSlider.setAttribute("index", slidersList.length)
  cloneSlider.setAttribute("isSliding", true)
  cloneSlider.style.cursor = "grab"
  slidingSliderIndex = cloneSlider.getAttribute("index")
  slidersList.push(cloneSlider)
  sliderPosList.push(inf)
  cloneSlider.addEventListener("click", toggleSliding)
  cloneSlider.addEventListener("dblclick", removeSlider)
  isSliding = true
  // cloneSlider.children[3].addEventListener("click", removeSlider)
}


document.addEventListener("mousemove", e => {
  if (slidingSliderIndex >= 0) moveSlider(e)
})

function toggleSliding(e){
  e.stopPropagation()
  let slider = event.target.parentNode
  let index = parseInt(slider.getAttribute("index"))
  if (isSliding == false){
    isSliding = true
    slider.setAttribute("isSliding", true)
    slidingSliderIndex = index
    slider.style.cursor = "grab"
    
  }
  else{
    slider.style.cursor = "pointer"
    isSliding = false
    slidingSliderIndex = -1
    slider.setAttribute("isSliding", false)
    slider.children[1].style.color = "black"
    let sliderPositionPercent = slider.style.left
    sliderPositionPercent = sliderPositionPercent.substring(0, sliderPositionPercent.length - 1)
    sliderPosList[index] = parseFloat(sliderPositionPercent)
    console.log(sliderPosList)
    flagBtn.style.opacity = "100%"
  }
}

function moveSlider(e){
  const rect = timelineContainer.getBoundingClientRect()
  const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
  const startTime = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds()
  const time = ~~(startTime + video.duration * percent)
  const hour = ~~(time/3600)
  const mintue = ~~((time - 3600 * hour)/60)
  const timeText = hour+ ":" + mintue

  if(isSliding && percent > video.currentTime / video.duration){
    let slider = slidersList[slidingSliderIndex]
    if(slider.style.display == "none") slider.style.display = "block"
    slider.style.left = percent * 100 + "%"
    slider.style.bottom = "50%"
    slider.children[1].textContent = timeText
    slider.children[1].style.color = "rgb(200, 200, 200)"
  }
}

function removeSlider(e){
  console.log("closed")
  e.stopPropagation()
  let slider = event.target.parentNode
  let index = parseInt(slider.getAttribute("index"))
  timelineContainer.removeChild(slider)
  sliderPosList[index] = inf
  isSliding = false
}



// Focus and no focus
let isActive = true
let startInactvity
let endInactivity
let sectionStarts = []
let sectionEnds = []

window.addEventListener("blur", toggleFocus)
window.addEventListener("focus", toggleFocus)

// const green = "#93c47d"
const green = "grey"
const red = "#e06666"
const audioTrack = "assets/alert3.wav"


function toggleFocus(){
  if(!isAsync){
    if(isActive == true){
      isActive = false
      startInactvity = video.currentTime/video.duration * 100
      sectionStarts.push(startInactvity)
    }
    else{
      isActive = true
      endInactvity = video.currentTime/video.duration * 100
      addSection(startInactvity, endInactvity, red)
      sectionEnds.push(endInactvity)
      totalMissedPercent += (endInactvity - startInactvity)
      // totalMissedPercent += currentMissedPercent
      currentMissedPercent = 0

      //move async thumbnail indicator to the first red section
      // asyncThumbIndicator.style.display = "block"
      // asyncThumbIndicator.children[1].textContent = ""
      // asyncThumbIndicator.style.left = sectionStarts[sectionInd] + "%"
    }
  }
}

let greenSections = []
let redSections = []

let totalRedPercent = 0
let totalGreenPercent = 0

function addSection(start, end, color){
  const section = document.createElement("div")
  section.setAttribute("class", "section")
  section.style.left = start + "%"
  section.style.width = (end - start) + "%"
  section.style.backgroundColor = color
  timelineContainer.appendChild(section)
  if(color == green){
    section.style.zIndex = 10
    greenSections.push(section)
    currentGreenWidth = 0
    totalGreenPercent += (end - start)
  }
  if(color == red){
    // //if there is a small gap between this section and the last --> ignore the gap
    // if(start - sectionEnds.slice(-1) < 1){
    //   section.style.left = sectionEnds.slice(-1) + "%"
    //   section.style.width = (end - sectionEnds.slice(-1)) + "%"
    // }
    redSections.push(section)
    currentRedWidth = 0
    totalRedPercent += (end - start)    
  }
}

let currentGreenWidth = 0
let currentRedWidth = 0
function updateSection(){
  //green section added when viewing asynchronosly to show what we watched, until the end of hte red section!
  if (greenSections.length != 0 && greenSectionActive == true){
    let end = video.currentTime/video.duration * 100
    let start = greenSections[greenSections.length - 1].style.left
    start = parseFloat(start.substring(0, start.length - 1))
    if(end - start > currentGreenWidth){ //only increase length
      currentGreenWidth = end - start
    }
    greenSections[greenSections.length - 1].style.width = currentGreenWidth + "%"
  }

  //red section added when viewing asynchronously to show what we are missing
  if (redSections.length != 0){
    let syncend = syncVideo.currentTime/video.duration * 100
    let syncstart = redSections[redSections.length - 1].style.left
    syncstart = parseFloat(syncstart.substring(0, syncstart.length - 1))
    currentRedWidth = syncend - syncstart
    redSections[redSections.length - 1].style.width = currentRedWidth + "%"
  }
}

let currentMissedPercent
let currentViewedPercent
function updateMissedPercent(){
  if(isActive == false){
    currentMissedPercent = (video.currentTime/video.duration) * 100 - sectionStarts[sectionStarts.length - 1]
  }
  if(isAsync){
    currentViewedPercent = (video.currentTime/video.duration) * 100 - sectionStarts[sectionInd]
    currentMissedPercent = (syncVideo.currentTime/video.duration) * 100 - sectionStarts[sectionStarts.length - 1]
    // console.log("green", totalViewedPercent + currentViewedPercent, ",red:", totalMissedPercent + currentMissedPercent)
  }
}

// Reminder to start asynchronous viewing
let totalMissedPercent = 0
let totalViewedPercent = 0
let playbackPace = 1.8
let reminderSent = false
let timeDifference
let blinkInterval

var requiredViewingTime = 0

function viewReminder(){
  let nextSliderPos = Math.min(...sliderPosList)
  let minInd = sliderPosList.indexOf(nextSliderPos)

  // total of what needs to be watched in the future
  const currentPercent = video.currentTime/video.duration * 100
  requiredViewingTime = ((currentPercent - sectionStarts[sectionInd])/playbackPace) / (1 - 1/playbackPace)
  // const toWatchPercent = (totalMissedPercent + currentMissedPercent) - (totalViewedPercent + currentViewedPercent)
  // const requiredViewingTime = ((totalMissedPercent + currentMissedPercent)/playbackPace) / (1 - 1/playbackPace)


  //send a reminder when it is time to start async viewing only once to start
  if(requiredViewingTime!= 0){
    if ((nextSliderPos - currentPercent) <= requiredViewingTime +0.1 && reminderSent == false && isAsync == false){
      console.log(requiredViewingTime)
      playSound(audioTrack)
      reminderSent = true
      showAlertMark(slidersList[minInd].children[3])
      showAlertMark(slider.children[3])
      // asyncThumbIndicator.style.left = sectionStarts[sectionInd] + "%"
      // asyncThumbIndicator.style.display = "block"
      // asyncThumbIndicator.children[1].textContent = "Start viewing!"
      // slidersList[minInd].children[1].style.borderStyle = "solid"
      blinkInterval = setInterval(blink, 500)
    }
  }

  //if in reviewing mode update the expected finishing time
  if(isAsync && nextSliderPos <= 100){
    const syncPercent = syncVideo.currentTime / video.duration * 100
    const expectedViewingTime = ((syncPercent - currentPercent)/playbackPace) / (1 - 1/playbackPace)
    timeDifference = (expectedViewingTime - (nextSliderPos - syncPercent)) / 100 * video.duration
    timeDifference = (timeDifference / 60)  // convert to minutes
    //update the slider time-difference
    let minInd = sliderPosList.indexOf(Math.min(...sliderPosList))
    if(timeDifference >= 0){
      slidersList[minInd].children[2].textContent = "+" + timeDifference.toFixed(1) + " min"
      slidersList[minInd].children[2].style.color = red
    }else{
      slidersList[minInd].children[2].textContent = timeDifference.toFixed(1) + " min"
      slidersList[minInd].children[2].style.color = green
    }   
  }

  //if it passes the slide in non-reviewing mode remove the slider
  if(!isAsync && currentPercent >= nextSliderPos){
    slidersList[minInd].style.display = "none"
    sliderPosList[minInd] = inf
  }
}


//border blinking 
function blink(){
  let nextSliderPos = Math.min(...sliderPosList)
  let minInd = sliderPosList.indexOf(nextSliderPos)
  if(slidersList[minInd].children[1].style.borderStyle == "none"){
    slidersList[minInd].children[1].style.borderStyle = "solid" 
    // asyncThumbIndicator.style.display = "block"
  }
  else{
    slidersList[minInd].children[1].style.borderStyle = "none"
    // asyncThumbIndicator.style.display = "none"
  }
}

// start asynchronous viewing (AV)
let sectionInd = 0
let isAsync = false
const syncVideo = liveVideoContainer.children[0]
syncVideo.style.filter = "grayscale(1)"
let midSectionStartTime = 0

asyncThumbIndicator.addEventListener("click", startAV)

function startAV(time){
  if(isAsync == false || isAsync == true /*&& (currentMissedPercent + totalMissedPercent)!= 0*/){
    console.log(time)
    //remove text and change color for indicator
    asyncThumbIndicator.children[1].textContent = ""
    asyncThumbIndicator.children[0].src = "assets/student.png"
    asyncThumbIndicator.style.opacity = "100%"
    mainVideoContainer.style.borderColor = green

    //setup live video container
    liveVideoContainer.style.display = "block"
    liveLableMain.style.display = "none"
    // syncVideo.currentTime = video.currentTime
    // syncVideo.play()
    syncVideo.playbackRate = 1
    // syncVideo.musted = true
    syncVideo.style.filter = "grayscale(1)"


    //start async viewing of the video
    isAsync = true
  

    video.currentTime = time

    //add green section for the async view 
    // addSection(video.currentTime/video.duration * 100, video.currentTime/video.duration * 100, green)
    // greenSectionCount += 1
    // greenSectionActive = true
    greenSectionActive = false   //end the green section when moving to another start point

    // video.currentTime = parseInt(asyncThumbIndicator.style.left.substring(0, asyncThumbIndicator.style.left.length - 1))/100 * video.duration
    video.playbackRate = playbackPace

    
    //add red section for the live video that is being missed (most recent red section being updated right now)
    if(redSectionActive == false){
      addSection(syncVideo.currentTime/video.duration * 100, syncVideo.currentTime/video.duration * 100, red)
      sectionStarts.push(syncVideo.currentTime/video.duration * 100)
      redSectionActive = true
    }

    //activate all controls
    activate(skipForwardBtn)
    activate(speedContainer)
    speedText.textContent = playbackPace.toFixed(1)

    //stop blinking 
    asyncThumbIndicator.style.display = "block"
    clearInterval(blinkInterval)

    //update sectionInd, what is the next red section that we are going to view?
    for(let i = 0; i<sectionEnds.length; i ++){
      if(time/video.duration * 100 > sectionEnds[i]){
        sectionInd = i
        console.log(i)
      }
      if(time/video.duration * 100 < sectionEnds[0]){
      	sectionInd = 0
      }
    }
  }

}

// when clicking on the syncthumbindicator we want to jump to the live lecture
syncThumbIndicator.addEventListener("click", jumpToLive)
function jumpToLive(){
  if(isAsync){
      isAsync = false
      
      // liveVideoContainer.style.display = "none"
      liveLableMain.style.display = "block"
      mainVideoContainer.style.borderColor = "#595959"
      asyncThumbIndicator.children[0].src = "assets/student.png"
      // asyncThumbIndicator.style.opacity = "50%"
      // asyncThumbIndicator.style.left = video.currentTime / video.duration * 100 + "%"
      syncThumbIndicator.style.left = "calc(var(--progress-position) * 100%)"

      video.playbackRate = 1
      video.currentTime = syncVideo.currentTime

      if(video.paused){
      	togglePlayPause()
      }
      // syncVideo.pause()
      syncVideo.muted = true

      //delete catchup line
      removeCatchUpLine()

      //push the last red section's end
      sectionEnds.push(syncVideo.currentTime/video.duration * 100)
      redSectionActive = false
      // sectionInd += 1

      // deactive async viewing controls
      // asyncControls.style.opacity = "50%"
      // asyncControls.style.zIndex = "50"
  }
}

let greenSectionCount = 0
let greenSectionActive = false
let redSectionActive = false


function updateAsyncView(){
  if (isAsync){
    //move thumb-indicator
    asyncThumbIndicator.style.left = "calc(var(--progress-position) * 100%)"
    syncThumbIndicator.style.left = "calc(var(--live-progress-position) * 100%)"

    

    //move to next missed section
    if(sectionInd < sectionStarts.length){
      if(video.currentTime >= sectionEnds[sectionInd]/100 * video.duration){
        totalViewedPercent += (sectionEnds[sectionInd] - sectionStarts[sectionInd])
        sectionInd += 1
        greenSectionActive = false
        //video.currentTime = sectionStarts[sectionInd]/100 * video.duration
        currentViewedPercent = 0
        //add green sections starting in the new section
      }
      if(video.currentTime > sectionStarts[sectionInd]/100 * video.duration && greenSectionActive == false){
          addSection(video.currentTime/video.duration * 100, video.currentTime/video.duration * 100, green)
          // addSection(sectionStarts[sectionInd], video.currentTime/video.duration * 100, green)      // made a change so that the green sections only cover red sections.
          greenSectionCount += 1
          greenSectionActive = true
        }
    }

    //update green and red section
    updateSection()
    updateCatchUpLine()

   
    //exit async viewing
    if (video.currentTime > syncVideo.currentTime){

      isAsync = false
      video.playbackRate = 1
      // syncVideo.pause()
      // liveVideoContainer.style.display = "none"
      liveLableMain.style.display = "block"
      mainVideoContainer.style.borderColor = "#595959"
      asyncThumbIndicator.children[0].src = "assets/student.png"
      // asyncThumbIndicator.style.opacity = "50%"
      // asyncThumbIndicator.style.left = video.currentTime / video.duration * 100 + "%"
      asyncThumbIndicator.style.display = "initial"
      // syncThumbIndicator.style.left = "calc(var(--progress-position) * 100%)"
      // slider.style.left = "100%"
      // sliderTime.textContent = ""

      //deactivate controls
      deactivate(skipForwardBtn)
      deactivate(speedContainer)
      speedText.textContent = "1.0"

      //delete catchup line
      removeCatchUpLine()

      //reset reminder 
      totalMissedPercent = 0
      currentMissedPercent = 0
      totalViewedPercent = 0
      currentViewedPercent = 0
      reminderSent = false

      // remove the time estimate on the next slider
      let minInd = sliderPosList.indexOf(Math.min(...sliderPosList))
      if(sliderPosList[minInd] <= 100){
        slidersList[minInd].children[2].textContent = ""
      }

      // if there were any sliders and current time is past the slider pos
      if(sliderPosList[minInd] <= 100 && video.currentTime/video.duration * 100 > sliderPosList[minInd]){
      sliderPosList[minInd] = inf
      slidersList[minInd].style.display = "none"
      }

      //push the last red section's end
      sectionEnds.push(video.currentTime/video.duration * 100)
      sectionInd += 1
      greenSectionActive = false
      redSectionActive = false

      // deactive async viewing
      // asyncControls.style.opacity = "50%"
      // asyncControls.style.zIndex = "50"
    }
  }
}


function updateCatchUpLine(){
	leftArrow.style.display="block"
	rightArrow.style.display = "block"
	catchUpLine.style.display = "block"
	catchUpTimeText.style.display = "block"
	catchUpLine.style.left = video.currentTime/video.duration * 100 + "%"
    catchUpLine.style.width = (syncVideo.currentTime - video.currentTime)/video.duration * 100 + "%"
    rightArrow.style.left = (syncVideo.currentTime/video.duration * 100)-0.5 + "%"
    leftArrow.style.left =  video.currentTime/video.duration * 100 + "%"
    catchUpTimeText.style.left = (syncVideo.currentTime + video.currentTime) * 0.5 /video.duration * 100 + "%"
    catchUpTimeText.textContent = convertToMinutes(((syncVideo.currentTime - video.currentTime)/playbackPace)/(1 - 1/playbackPace))
}

function removeCatchUpLine(){
	leftArrow.style.display = "none"
	rightArrow.style.display = "none"
	catchUpLine.style.display = "none"
	catchUpTimeText.style.display = "none"
}

// asynchronous controls event handling

playBtn.addEventListener("click", togglePlayPause)
function togglePlayPause(){
  if(video.paused){
    video.play()
    playBtn.children[0].setAttribute("src", "assets/pause-btn.png")
    syncVideo.muted = true
    syncVideo.style.filter = "grayscale(1)"
    video.style.filter = "grayscale(0)"

     //swtich which audio button is shown -> when video is playing the audio for the async video is playing
    audioButtonLive.style.display = "none"
    audioButtonMain.style.display = "block"

  } else{
  	video.pause()
  	video.currentTime -= 1
  	startAV(video.currentTime)
    playBtn.children[0].setAttribute("src", "assets/play-btn.png")
    syncVideo.muted = false
    syncVideo.style.filter = "grayscale(0)"
    video.style.filter = "grayscale(1)"

    //swtich which audio button is shown -> when video is pause the audio for the sync video is playing
    audioButtonLive.style.display = "block"
    audioButtonMain.style.display = "none"
  }  
}

//close btn
closeBtn.addEventListener("click", jumpToLive)

skipForwardBtn.addEventListener("click", skipForward)
skipBackBtn.addEventListener("click", skipBack)


const skipInterval = 5
// function skipForward(){
//   if(isAsync){
//     if(sectionInd < sectionEnds.length){
//       if((video.currentTime + skipInterval) / video.duration * 100 < sectionEnds[sectionInd]){
//          video.currentTime += skipInterval
//       }
//       else{
//         video.currentTime = (sectionEnds[sectionInd]) / 100 * video.duration
//       }
//     } else{
//       if((video.currentTime + skipInterval) < syncVideo.currentTime){
//         video.currentTime += skipInterval
//       }
//       else{
//         video.currentTime = syncVideo.currentTime
//       }
//     }
//   }
// }

function skipForward(){
  if(isAsync){
    if(video.currentTime + skipInterval < syncVideo.currentTime){
      video.currentTime += skipInterval
    }else{
      video.currentTime = syncVideo.currentTime
    }
  }
}

// function skipBack(){
//   if(isAsync){
//     if(sectionInd > 0){
//       if((video.currentTime - skipInterval)/ video.duration * 100 < sectionStarts[sectionInd]){
//         sectionInd -= 1
//         video.currentTime = sectionEnds[sectionInd] / 100 * video.duration - skipInterval
//       }
//       else{
//         video.currentTime -= skipInterval
//       }
//     }
//     else{
//       if((video.currentTime - skipInterval)/ video.duration * 100 < sectionStarts[sectionInd]){
//         video.currentTime = sectionStarts[sectionInd]
//       }
//       else{
//         video.currentTime -= skipInterval
//       }
//     }
//   }
// }

function skipBack(){
  greenSectionActive = false
  if(isAsync){
    if(video.currentTime - skipInterval > 0){
      video.currentTime -= skipInterval
    }else{
      video.currentTime = 0
    }
    //update sectionInd, what is the next red section that we are going to view?
    for(let i = 0; i<sectionEnds.length; i ++){
      if(video.currentTime/video.duration * 100 > sectionEnds[i]){
        sectionInd = i
        console.log(i)
      }
      if(video.currentTime/video.duration * 100 < sectionEnds[0]){
      	sectionInd = 0
      }
    }
  }
  else{
  	startAV(video.currentTime - 5)
  }
}


incSpeedBtn.addEventListener("click", increaseSpeed)
decSpeedBtn.addEventListener("click", decreaseSpeed)
function increaseSpeed(){
  if(isAsync){
    playbackPace += 0.1
    video.playbackRate += 0.1
    speedText.textContent = video.playbackRate.toFixed(1)
  }
}

function decreaseSpeed() {
  if(isAsync){
    playbackPace -= 0.1
    video.playbackRate -= 0.1
    speedText.textContent = video.playbackRate.toFixed(1)
  }
}


//---- check for activity live events -> Unanticipated non-defferable events. live pop up questions


let eventTimeInd = 0
let signalTime = 0
let signalLength = 10   //how long the signal is shown
let answeredQuestionsNum = 0

function checkforLiveEvents(){
  // if the activity button is on
  if(isCheckingActivity){
    // if viewing asynchronously
    if (isAsync){
      for(let i = 0; i < eventTimesList.length + 1; i++){
        if(syncVideo.currentTime >= eventTimesList[i] && syncVideo.currentTime < eventTimesList[i] + 3){
          playSound(audioTrack)
          showAlertMark(activityBtn.children[1])
          bigWindowPrompt.children[0].textContent = promptsList[i]
          bigWindowPrompt.style.display = "block"
          // syncThumbIndicator.children[0].setAttribute("src", "assets/teacher.png")
          signalTime = syncVideo.currentTime + signalLength
          eventTimesList[i] = "50:0"
        }
      }
    }else{
      if(!isActive){
        for(let i = 0; i < eventTimesList.length + 1; i++){
          if(syncVideo.currentTime >= eventTimesList[i] && syncVideo.currentTime < eventTimesList[i] + 3){
              playSound(audioTrack)
              showAlertMark(activityBtn.children[1])
              // activateLive(eventTimeInd)
              bigWindowPrompt.children[0].textContent = promptsList[i]
              bigWindowPrompt.style.display = "block"
              // syncThumbIndicator.children[0].setAttribute("src", "assets/teacher.png")
              signalTime = syncVideo.currentTime + signalLength
              eventTimesList[i] = "50:0"
          }
        }
      }
    }
  }
  if(signalTime != 0){
      terminateBy(signalTime)
    }
}

function terminateBy(time){
  if(isAsync){
    if(syncVideo.currentTime >= time){
      // syncThumbIndicator.children[0].setAttribute("src", "assets/teacher.png")
      bigWindowPrompt.children[0].textContent = ""
      bigWindowPrompt.style.display = "none"
      signalTime = 0

      if(bigWindowPrompt.children[1].checked){
      	answeredQuestionsNum++
      	bigWindowPrompt.children[1].checked = false
      }
    }
  }
  else{
    if(syncVideo.currentTime >= time){
      // syncThumbIndicator.children[0].setAttribute("src", "assets/teacher.png")
      bigWindowPrompt.children[0].textContent = ""
      bigWindowPrompt.style.display = "none"
      signalTime = 0

      if(bigWindowPrompt.children[1].checked){
      	answeredQuestionsNum++
      	bigWindowPrompt.children[1].checked = false
      }
    }
  }
}


// slide thumbnails

function convertToSeconds(list){
  let ans = []
  for (let i = 0; i <list.length; i++){
    let str = list[i].split(":")
    let seconds = parseInt(str[0]) * 60 + parseInt(str[1])
    ans.push(seconds)
  }
  console.log(ans)
  return(ans)
}

function convertToMinutes(time){
	let min = 0
	let sec = time.toFixed(0)
	if(time>60){
		min = Math.floor(time/60)
		sec = Math.floor(time - min * 60)
	}
	return (min+":"+sec)
}


slidesTimesList = convertToSeconds(slidesTimesList)
let slidesThumbsList = []

function addInitialThumbs(){
  const num = slidesTimesList.length
  // const num = 30
  for (let i = 0; i<num; i+=1){
    const thumbnail = document.createElement("div")
    thumbnail.setAttribute("class", "future-slide-thumb")
    thumbnail.setAttribute("time", slidesTimesList[i])
    thumbnail.style.width = Math.min(5, (90/num - 1)) + "%"
    thumbnail.style.left = i * 100/(num) + 0.5 + "%"
    thumbnail.style.backgroundImage = "url(assets/slides/"+(i+1).toString()+".png)"
    // thumbnail.style.backgroundImage = "url(assets/slides/2.png)"
    slidesContainer.appendChild(thumbnail)
    slidesThumbsList.push(thumbnail)

    //add hover and click event listener to the thumbnails
    thumbnail.addEventListener("mouseover", enlargeThumb)
    thumbnail.addEventListener("mouseout", removeLarge)
    thumbnail.addEventListener("click", toggleBookmark)

    const bookmarkImg = document.createElement("img")
    bookmarkImg.setAttribute("class", "thumb-bkmark-img")
    bookmarkImg.setAttribute("src", "assets/bookmark2.png")
    bookmarkImg.setAttribute("isOn", "False")
    thumbnail.appendChild(bookmarkImg)

    //add event listener to thumbs for bookmarking
    thumbnail.addEventListener("click", toggleBookmark)
  }
}
addInitialThumbs()

let bigThumb = null
function enlargeThumb(e){
  if(e.target.getAttribute("class") != "future-slide-thumb"){
    return
  }
  let thumb = event.target
  bigThumb = thumb.cloneNode(false)
  videoContainer.appendChild(bigThumb) 
  // bigThumb.style.left = "80%"
  
  bigThumb.style.top = "40%"
  bigThumb.style.width = "28%"
  bigThumb.style.height = "40%"
  bigThumb.style.backgroundSize = "contain"
  if(parseInt(bigThumb.style.left, 10)>71){
    bigThumb.style.left = "71%"
  }
}

function removeLarge(e){
  if(e.target.getAttribute("class") != "future-slide-thumb"){
    return
  }
  videoContainer.removeChild(bigThumb)
}

let bookmarksList = []
function toggleBookmark(e){
  if(e.target.getAttribute("class") != "future-slide-thumb"){
    return
  }
  let thumbnail = event.target
  let bookmark = thumbnail.children[0]
  let bookmarkTime = parseInt(thumbnail.getAttribute("time"))
  //set bookmark
  if(bookmark.getAttribute("isOn") == "False" && bookmarkTime > syncVideo.currentTime){
    bookmark.style.display = "block"
    bookmark.setAttribute("isOn", "True")
    bookmarksList.push(parseInt(thumbnail.getAttribute("time")))
  }
  else{   //remove bookmark
    bookmark.style.display = "none"
    bookmark.setAttribute("isOn", "False")
    bookmarksList.splice(bookmarksList.indexOf(bookmarkTime), 1)
  }
  console.log(bookmarksList)
}


let slideInd = 0 //the slide that is being shown right now

function updateSlideThumbs(){
  let time
  if(isAsync) time = syncVideo.currentTime
  else time = video.currentTime

  if(time > slidesTimesList[slideInd]){
    let thumb = slidesThumbsList[slideInd]

    //check for bookmarks, if there it is bookmarked, play alert sound and remove from list
    let bookmark = thumb.children[0]
    let bookmarkTime = parseInt(thumb.getAttribute("time"))
    if(bookmark.getAttribute("isOn") == "True"){
      playSound(audioTrack)
      showAlertMark(bookmarkBtn.children[1])
      bookmark.style.display = "none"
      bookmark.setAttribute("isOn", "False")
      bookmarksList.splice(bookmarksList.indexOf(bookmarkTime), 1)
    }

    //update the current slide thumb width and position
    thumb.style.removeProperty("aspect-ratio") 
    thumb.style.left = slidesTimesList[slideInd]/video.duration * 100 + 0.6 + "%"
    thumb.style.width = (time - slidesTimesList[slideInd]) / video.duration * 100 + "%"
    thumb.style.height = "50%"
    thumb.style.top = "5%"
    thumb.style.borderRadius = "0px"
    thumb.style.borderWidth = "2.5px"
    
    //update the future slide thumbs space between them
    for (let i = 1; i < slidesTimesList.length - slideInd; i+=1){
      let futureThumb = slidesThumbsList[slideInd + i]
      let currentPercent = time/video.duration * 100
      futureThumb.style.left = currentPercent + i * (100 - currentPercent)/(slidesTimesList.length - slideInd) + "%"
    }

    //increment the slideInd
    if(time >= slidesTimesList[slideInd + 1]){
      slideInd += 1
    }

    //update the bookmark button
    if(bookmarksList.length!= 0){
      bookmarkBtn.style.opacity = "100%"
    }
    else{
      // bookmarkBtn.style.opacity = "50%"
    }
  }
}

// play alert sounds
function playSound(url) {
  const audio = new Audio(url);
  audio.play();
}

// show the alert mark on the button to make clear where the alerts sound is coming from
function showAlertMark(element){
  element.style.display = "block"
  setTimeout(hideAlertMark(element), 10000)
}

function hideAlertMark(element){
  return function() {
    element.style.display = "none"
  }
}

// clicking on liveWindow takes you to live
liveVideoContainer.addEventListener("click", jumpToLive)


// clicking on timerbutton once will set a timer for 1 minute from now, clicking on it twice for 2 minutes, and so on

timerBtn.addEventListener("click", setTimer)

let timerClickNum = 0
let timerTime
const timer = timerBtn.cloneNode(true)
timer.children[0].src = "assets/timer.png"
timelineContainer.appendChild(timer)
timer.style.display = "none"

function setTimer(e){
  e.stopPropagation()
  // if(!isAsync){
    timerClickNum += 1
    if (timerClickNum == 1){
      timerBtn.style.opacity = "100%"
      timerTime = syncVideo.currentTime + 60 * timerClickNum
      timer.style.display = "block"
      timer.style.left = timerTime /video.duration * 100 + "%"
      timer.style.bottom = "100%"
      timer.style.opacity = "100%"
    }
    else{
      if(timerTime + 60 < video.duration){
        timerTime += 60
        timer.style.left = timerTime /video.duration * 100 + "%"
      }
    }
  // }
}

//delete timer by clicking on its icon on the timeline
timer.addEventListener("click", deleteTimer)

function deleteTimer(){
  timer.style.display = "none"
  timerTime = 0
  timerClickNum = 0
  // timerBtn.style.opacity = "50%"
}

//function to update timers count down and remove it
let timeLeft
function updateTimer(){
  timeLeft = timerTime - syncVideo.currentTime
  let min = ~~(timeLeft / 60)
  let sec = ~~(timeLeft - min * 60)
  timer.children[1].textContent = min + ":" + sec
  if(timeLeft < 0 && timerClickNum > 0){
    playSound(audioTrack)
    deleteTimer()
    showAlertMark(timerBtn.children[2])
  }
}

// activity button on and off
activityBtn.addEventListener("click", toggleCheckingActivity)

let isCheckingActivity = false
function toggleCheckingActivity(e){
	e.stopPropagation()
  if(isCheckingActivity == false){
    isCheckingActivity = true
    activityBtn.style.opacity = "100%"
    activityBtn.children[2].style.display = "block"
  }
  else{
    isCheckingActivity = false
    activityBtn.children[2].style.display = "none"
    // activityBtn.style.opacity = "50%"
  }
}

//update flag button opacity on and off
function checkFlagButton(){
  for(let i = 0; i < sliderPosList.length; i++){
    if (sliderPosList != inf){
      return
    }
  }
  // flagBtn.style.opacity = "50%"
}

//add subtitles to the sync video and the async video

function addSubtitles(video, element){
  if(isAsync){
    for(let i = 0; i < subtitleTimes.length + 1; i++){
      if(video.currentTime > subtitleTimes[i] && video.currentTime < subtitleTimes[i+1]){
        // console.log(ind, element)
        element.textContent = subtitleTexts[i]
      }
    }
  }
  else{element.textContent = ""}
}

//--- audio buttons toggleing audio between main and live videos

audioButtonMain.addEventListener("click", toggleAudio(video, audioButtonMain))
audioButtonLive.addEventListener("click", toggleAudio(syncVideo, audioButtonLive))

function toggleAudio(video, button){
	return function(e){
		e.stopPropagation();
		if(video.muted){
			video.muted = false
			button.src = "assets/audio.png"
		}
		else{
			video.muted = true
			button.src = "assets/no-audio.png"
		}
	}

}


//-- functions for deactivating and activating async controls 

function deactivate(element){
	element.style.opacity = "50%"
    element.style.pointerEvents = "none"
}

function activate(element){
	element.style.opacity = "100%"
    element.style.pointerEvents = "auto"
}

deactivate(speedContainer)
deactivate(skipForwardBtn)



//-- update transcript body
let transcriptInd = 1
let autoScrollOn = true

function updateTranscript(){
	if(syncVideo.currentTime > subtitleTimes[transcriptInd] && syncVideo.currentTime < subtitleTimes[transcriptInd+1]){
		console.log(transcriptBody.clientHeight, transcriptBody.scrollTop)
		console.log(transcriptBody.scrollHeight)
		if(transcriptBody.clientHeight + transcriptBody.scrollTop < transcriptBody.scrollHeight - 3){
			autoScrollOn = false
		}
		else{
			autoScrollOn = true
		}
		const newSentence = document.createElement("div")
		newSentence.setAttribute("class", "transcript-sentence")
		newSentence.innerHTML = subtitleTexts[transcriptInd - 1]+ "<br /><br />"
		newSentence.setAttribute("id", transcriptInd - 1)
		transcriptBody.appendChild(newSentence)
		transcriptInd++

		if(autoScrollOn){
			transcriptBody.scrollTo(0, transcriptBody.scrollHeight)
		}	
		//-- clicking on transcript sentence will take you back and startAV
		addSentecenClickHandler(newSentence, subtitleTimes[newSentence.getAttribute("id")])

	}
}

function addSentecenClickHandler(sentece, time){
	sentece.addEventListener("click", function(e) {
		startAV(time)
	}, false)
}

//----- original video player
document.addEventListener("keydown", e => {
  const tagName = document.activeElement.tagName.toLowerCase()

  if (tagName === "input") return

  switch (e.key.toLowerCase()) {
    case " ":
      if (tagName === "button") return
    case "k":
      togglePlay()
      break
    case "f":
      toggleFullScreenMode()
      break
    case "t":
      toggleTheaterMode()
      break
    case "i":
      toggleMiniPlayerMode()
      break
    case "m":
      toggleMute()
      break
    case "arrowleft":
    case "j":
      skipBack()
      break
    case "arrowright":
    case "l":
      skipForward()
      break
    case "c":
      toggleCaptions()
      break
    case "arrowup":
      increaseSpeed()
      break
    case "arrowdown":
      decreaseSpeed()
      break
  }
})

// Timeline
// timelineContainer.addEventListener("mousemove", handleTimelineUpdate)
// timelineContainer.addEventListener("mousedown", toggleScrubbing)
// document.addEventListener("mouseup", e => {
//   if (isScrubbing) toggleScrubbing(e)
// })
// document.addEventListener("mousemove", e => {
//   if (isScrubbing) handleTimelineUpdate(e)
// })

timelineContainer.addEventListener("mousedown", toggleScrubbing)
let isScrubbing = false
let wasPaused
function toggleScrubbing(e) {
  const rect = timelineContainer.getBoundingClientRect()
  const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
  isScrubbing = (e.buttons & 1) === 1
  // videoContainer.classList.toggle("scrubbing", isScrubbing)
  if(percent < syncVideo.currentTime/video.duration){     // clicking on the timeline will start the review process
    for(let i = 0; i < sectionStarts.length; i++){
      console.log(sectionStarts[i], percent * 100)
      if((sectionStarts[i] - percent*100) < 0.5 &&(sectionStarts[i] - percent*100) > -0.5){
        startAV(sectionStarts[i]/100 * video.duration)
        return
      }
    }
    startAV(percent * video.duration)
  }
  // if (isScrubbing) {
  //   wasPaused = video.paused
  //   video.pause()
  // } else {
  //   video.currentTime = percent * video.duration
  //   if (!wasPaused) video.play()
  // }

  // handleTimelineUpdate(e)
}

function handleTimelineUpdate(e) {
  const rect = timelineContainer.getBoundingClientRect()
  const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
  const previewImgNumber = Math.max(
    1,
    Math.floor((percent * video.duration) / 10)
  )
  // const previewImgSrc = `assets/previewImgs/preview${previewImgNumber}.jpg`
  // previewImg.src = previewImgSrc
  timelineContainer.style.setProperty("--preview-position", percent)

  if (isScrubbing) {
    e.preventDefault()
    // thumbnailImg.src = previewImgSrc
    timelineContainer.style.setProperty("--progress-position", percent)
  }
}


// Playback Speed
speedBtn.addEventListener("click", changePlaybackSpeed)

function changePlaybackSpeed() {
  if(isAsync){
    let newPlaybackRate = video.playbackRate + 0.25
    if (newPlaybackRate > 2) newPlaybackRate = 0.25
    video.playbackRate = newPlaybackRate
    speedBtn.textContent = `${newPlaybackRate}x`
  }
}

// Captions
const captions = video.textTracks[0]
captions.mode = "hidden"

captionsBtn.addEventListener("click", toggleCaptions)

function toggleCaptions() {
  const isHidden = captions.mode === "hidden"
  captions.mode = isHidden ? "showing" : "hidden"
  videoContainer.classList.toggle("captions", isHidden)
}

// Duration
video.addEventListener("loadeddata", () => {
  totalTimeElem.textContent = formatDuration(video.duration)
})


// the funcitons are now called at function update()
video.addEventListener("timeupdate", () => {
  currentTimeElem.textContent = formatDuration(video.currentTime)
  // const percent = video.currentTime / video.duration
  // timelineContainer.style.setProperty("--progress-position", percent)
  // timelineContainer.style.setProperty("--live-progress-position", syncVideo.currentTime/video.duration)
  // viewReminder()
  // updateMissedPercent()
  // updateAsyncView()
})

const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
})
function formatDuration(time) {
  const seconds = Math.floor(time % 60)
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600)
  if (hours === 0) {
    return `${minutes}:${leadingZeroFormatter.format(seconds)}`
  } else {
    return `${hours}:${leadingZeroFormatter.format(
      minutes
    )}:${leadingZeroFormatter.format(seconds)}`
  }
}

function skip(duration) {
  video.currentTime += duration
}

// Volume
muteBtn.addEventListener("click", toggleMute)
volumeSlider.addEventListener("input", e => {
  video.volume = e.target.value
  video.muted = e.target.value === 0
})

function toggleMute() {
  video.muted = !video.muted
}

video.addEventListener("volumechange", () => {
  volumeSlider.value = video.volume
  let volumeLevel
  if (video.muted || video.volume === 0) {
    volumeSlider.value = 0
    volumeLevel = "muted"
  } else if (video.volume >= 0.5) {
    volumeLevel = "high"
  } else {
    volumeLevel = "low"
  }

  videoContainer.dataset.volumeLevel = volumeLevel
})

// View Modes
theaterBtn.addEventListener("click", toggleTheaterMode)
fullScreenBtn.addEventListener("click", toggleFullScreenMode)
miniPlayerBtn.addEventListener("click", toggleMiniPlayerMode)

function toggleTheaterMode() {
  videoContainer.classList.toggle("theater")
}

function toggleFullScreenMode() {
  if (document.fullscreenElement == null) {
    videoContainer.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

function toggleMiniPlayerMode() {
  if (videoContainer.classList.contains("mini-player")) {
    document.exitPictureInPicture()
  } else {
    video.requestPictureInPicture()
  }
}

document.addEventListener("fullscreenchange", () => {
  videoContainer.classList.toggle("full-screen", document.fullscreenElement)
})

video.addEventListener("enterpictureinpicture", () => {
  videoContainer.classList.add("mini-player")
})

video.addEventListener("leavepictureinpicture", () => {
  videoContainer.classList.remove("mini-player")
})

// Play/Pause
playPauseBtn.addEventListener("click", togglePlay)
video.addEventListener("click", togglePlay)

function togglePlay() {
  video.paused ? video.play() : video.pause()
  startTime.textContent = time_0
  syncVideo.play()
  syncVideo.muted = true
}

video.addEventListener("play", () => {
  videoContainer.classList.remove("paused")
})

video.addEventListener("pause", () => {
  videoContainer.classList.add("paused")
})
