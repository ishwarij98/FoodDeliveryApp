const restaurants = [
    {
        "name": "Raju Gari Biryani",
        "areaName": "Madhapur",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/2/19/3353d459-aec5-455b-b2ed-aea5208c4a5c_e738178b-a7de-49f4-84b7-dbd008c2787e.jpeg",
        "avgRating": 3.9,
        "costForTwoMessage": "₹200 FOR TWO",
        "totalRatingsString": "55K+"
    },
    {
        "name": "Shah Ghouse Hotel & Restaurant",
        "areaName": "Banjara Hills",
        "cloudinaryImageId": "grqh1zb1kv8uhkmyercb",
        "avgRating": 4.3,
        "costForTwoMessage": "₹350 FOR TWO",
        "totalRatingsString": "76K+"
    },
    {
        "name": "9 Biryanis and Pulaos",
        "areaName": " Gachibowli",
        "cloudinaryImageId": "i6zdcmlzndop38helret",
        "avgRating": 3.2,
        "costForTwoMessage": "₹200 FOR TWO",
        "totalRatingsString": "398"
    },
    {
        "name": "Lucky Multicuisine Restaurant",
        "areaName": "Madhapur",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/21/21a6f94c-83b4-48b7-ab69-fe00198d0241_43a2106c-7c2f-403b-bd87-c52ef5bb38b2.jpeg",
        "avgRating": 3.8,
        "costForTwoMessage": "₹400 FOR TWO",
        "totalRatingsString": "44K+"
    },
    {
        "name": "Biryani Company",
        "areaName": "Nizampet & Pragathi Nagar",
        "cloudinaryImageId": "32c777729cae0bbb395cf65ea26b0995",
        "avgRating": 3.7,
        "costForTwoMessage": "₹400 FOR TWO",
        "totalRatingsString": "934"
    },
    {
        "name": "Mehfil Biryani",
        "areaName": "Kukatpally",
        "cloudinaryImageId": "6538c94356c1f0b2ce0008584bd455e4",
        "avgRating": 2.9,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "4.0K+"
    },
    {
        "name": "House of Biryani's",
        "areaName": "Nizampet & Pragathi Nagar",
        "cloudinaryImageId": "22823aa73ecd723859b22a9a8fe69586",
        "avgRating": 3.3,
        "costForTwoMessage": "₹400 FOR TWO",
        "totalRatingsString": "283"
    },
    {
        "name": "Biryaniwala",
        "areaName": "Chanda Naik Nagar",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/10/17/a39447bb-70ef-4a6e-a57a-f1b160908091_14c6e9a6-d214-400c-8a79-2d3a14faefde.jpg",
        "avgRating": 3.7,
        "costForTwoMessage": "₹200 FOR TWO",
        "totalRatingsString": "9.9K+"
    },
    {
        "name": "Spicy Biryani Vibes",
        "areaName": "Madhapur",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/9/f6ac7e7c-b338-4bf6-afad-4e380f180771_3ddd4b4e-dad4-4351-8c15-25298a3de2d4.jpeg",
        "avgRating": 3.9,
        "costForTwoMessage": "₹400 FOR TWO",
        "totalRatingsString": "1.2K+"
    },
    {
        "name": "Sravanam 4 Am Kushka Biryani",
        "areaName": "Madhapur",
        "cloudinaryImageId": "c63a49be4ebaec0748e99181608a5e5a",
        "avgRating": 3.7,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "294"
    },
    {
        "name": "Biryani Stories",
        "areaName": "Kukatpally - Pragathi nagar",
        "cloudinaryImageId": "glligbgabmxatwvcifoq",
        "avgRating": 3.6,
        "costForTwoMessage": "₹350 FOR TWO",
        "totalRatingsString": "5.2K+"
    },
    {
        "name": "Meridian's Biryani And Shawarma",
        "areaName": "Banjara Hills",
        "cloudinaryImageId": "s3zpmnxvobwg9obxf1ug",
        "avgRating": 3.3,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "702"
    },
    {
        "name": "Mehfil E Biryani",
        "areaName": "Banjara Hills",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/6/45ee3eb4-ce1f-4e75-aca6-24d499c266ad_2ac9a719-b930-403e-855d-191e6554cef9",
        "avgRating": 3.4,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "1.5K+"
    },
    {
        "name": "Biryani Biryani Pulav",
        "areaName": "Gachibowli",
        "cloudinaryImageId": "djsvtouxx5oulwewos6v",
        "avgRating": 3.3,
        "costForTwoMessage": "₹149 FOR TWO",
        "totalRatingsString": "447"
    },
    {
        "name": "Meenakshi Parcel And Catering",
        "areaName": "KPHB",
        "cloudinaryImageId": "iagrzim3pd32enykixed",
        "avgRating": 4.3,
        "costForTwoMessage": "₹400 FOR TWO",
        "totalRatingsString": "3.4K+"
    },
    {
        "name": "Raju gari Biryani and pulao",
        "areaName": "Kukatpally",
        "cloudinaryImageId": "37d39418a2b6fa306a2652fc11a2823f",
        "avgRating": 3.3,
        "costForTwoMessage": "₹200 FOR TWO",
        "totalRatingsString": "803"
    },
    {
        "name": "Bagara & Biryani",
        "areaName": "Madhapur",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/2/72c4d04f-5001-479f-89ee-b4828dcf37f8_9ead152e-de21-4194-9b9a-e8c333f808aa.jpeg",
        "avgRating": 4.1,
        "costForTwoMessage": "₹200 FOR TWO",
        "totalRatingsString": "1.7K+"
    },
    {
        "name": "Masthi 4Am Biryani",
        "areaName": "Madhapur",
        "cloudinaryImageId": "a30c382823eaa679a082c90ece570864",
        "avgRating": 3.5,
        "costForTwoMessage": "₹500 FOR TWO",
        "totalRatingsString": "261"
    },
    {
        "name": "Biryani",
        "areaName": "Gachibowli",
        "cloudinaryImageId": "djsvtouxx5oulwewos6v",
        "avgRating": 3.1,
        "costForTwoMessage": "₹249 FOR TWO",
        "totalRatingsString": "1.0K+"
    },
    {
        "name": "MI Biryani House",
        "areaName": "Ameerpet",
        "cloudinaryImageId": "a3enaaoglqydkdr82rs9",
        "avgRating": 3.5,
        "costForTwoMessage": "₹200 FOR TWO",
        "totalRatingsString": "378"
    },
    {
        "name": "Red Bucket Biryani",
        "areaName": "Vivekananda Nagar",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/6/fd2c75ab-b646-4989-a6be-dc2c189b5e1c_867085.jpg",
        "avgRating": 4.1,
        "costForTwoMessage": "₹578 FOR TWO",
        "totalRatingsString": "252"
    },
    {
        "name": "Biryanis And More",
        "areaName": "Shaikpet",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/10/274b63f9-b753-4831-b059-cd03ca89dc94_33899008-3ab1-4353-b57e-28e8c14d3bac.jpeg",
        "avgRating": 4,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "7.4K+"
    },
    {
        "name": "4M Biryani House",
        "areaName": "Musheerabad",
        "cloudinaryImageId": "805af0307dc1fc9218799b00bad9a025",
        "avgRating": 4.4,
        "costForTwoMessage": "₹250 FOR TWO",
        "totalRatingsString": "87K+"
    },
    {
        "name": "Kritunga Biryani",
        "areaName": "Nizampet",
        "cloudinaryImageId": "2a346047f76b0b013701edec0aadb3e7",
        "avgRating": 2.9,
        "costForTwoMessage": "₹199 FOR TWO",
        "totalRatingsString": "231"
    },
    {
        "name": "4Am Biryani",
        "areaName": "Nizampet",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/19/731ad3a8-ea0d-468f-94d4-b9f0893232cb_d6e81dc2-434b-4a42-bcc7-7af136c3d1ea.jpeg",
        "avgRating": 2.5,
        "costForTwoMessage": "₹199 FOR TWO",
        "totalRatingsString": "147"
    },
    {
        "name": "Hyderabadi Biryani Dreams",
        "areaName": "Gachibowli",
        "cloudinaryImageId": "txyzmii4verzzixr25eb",
        "avgRating": 3.8,
        "costForTwoMessage": "₹340 FOR TWO",
        "totalRatingsString": "6.0K+"
    },
    {
        "name": "Mehfile's Biryani",
        "areaName": "Kondapur",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/11/f7a01dbf-5cb5-4d99-aa9e-0b426d66c443_ea28cde9-e38c-41bf-8621-7697e0d2d507.jpg",
        "avgRating": 3.1,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "496"
    },
    {
        "name": "Biryani Vs Pulav",
        "areaName": "Nizampet & Pragathi Nagar",
        "cloudinaryImageId": "c4422cdefe45d9e1befb323de975e3df",
        "avgRating": 3.4,
        "costForTwoMessage": "₹400 FOR TWO",
        "totalRatingsString": "641"
    },
    {
        "name": "Meridian Biryani",
        "areaName": "Kondapur",
        "cloudinaryImageId": "s3zpmnxvobwg9obxf1ug",
        "avgRating": 3,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "719"
    },
    {
        "name": "Lucky Biryani Point",
        "areaName": "Banjara Hills",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/6/be097fa2-fbd0-46df-8388-4987f5d80138_bf7c0820-f4bf-4d6e-b7ca-b45aeddcd0a1_compressed",
        "avgRating": 3.6,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "47"
    },
    {
        "name": "Bismillah Biryani",
        "areaName": "Ameerpet",
        "cloudinaryImageId": "937eb0f1857c97c4c0c3ad5fe41b9d6b",
        "avgRating": 3,
        "costForTwoMessage": "₹250 FOR TWO",
        "totalRatingsString": "120"
    },
    {
        "name": "Biryani Premium",
        "areaName": "Kondapur",
        "cloudinaryImageId": "jnzvfhn8saql6jbkcbjo",
        "avgRating": 2.2,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "100"
    },
    {
        "name": "Biryani Hunger",
        "areaName": "Banjara Hills",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/19/ff8311bf-6594-4393-9709-13839a9846c0_520ff5dd-8ff5-4e5d-b8e0-49b7f2ab6198.jpg",
        "avgRating": 3.4,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "12"
    },
    {
        "name": "The Biryani Grand",
        "areaName": "Gachibowli",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/11/9/3aa7e197-d91b-4363-b4d5-913011bf7dde_8fb3748a-9230-4bb7-8af0-3cd7acb0cd71.JPG",
        "avgRating": 2.3,
        "costForTwoMessage": "₹299 FOR TWO",
        "totalRatingsString": "26"
    },
    {
        "name": "Sagar Biryani AM to PM",
        "areaName": "Jeedimetla & Chintal",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/13/5b90b9af-624e-4d18-9509-7e8b38209943_b6d189a2-2d97-4ec9-96b0-e5a85a00a114.jpg",
        "avgRating": 3.2,
        "costForTwoMessage": "₹360 FOR TWO",
        "totalRatingsString": "469"
    },
    {
        "name": "Biryani Mahal",
        "areaName": "Gachibowli",
        "cloudinaryImageId": "bk36zvn0glseswvgnf9u",
        "avgRating": 2.3,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "227"
    },
    {
        "name": "Star Hotel",
        "areaName": "Musheerabad",
        "cloudinaryImageId": "391951eabd3951e909849947b863ff55",
        "avgRating": 3.6,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "34K+"
    },
    {
        "name": "Pista Hub Biryani",
        "areaName": "Miyapur",
        "cloudinaryImageId": "cbe4d696e337c38fddfb260997e4d215",
        "avgRating": 2.7,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "580"
    },
    {
        "name": "Biryani Hills",
        "areaName": "Nizampet & Pragathi Nagar",
        "cloudinaryImageId": "zxecvwtf9e6ktutr4053",
        "avgRating": 2.8,
        "costForTwoMessage": "₹200 FOR TWO",
        "totalRatingsString": "92"
    },
    {
        "name": "Biryani Spice",
        "areaName": "Nizampet & Pragathi Nagar",
        "cloudinaryImageId": "f107ff6501768b34f4561bc8fd57b2d1",
        "avgRating": 3.7,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "2.7K+"
    },
    {
        "name": "Lucky Restaurant",
        "areaName": "Bowenpally",
        "cloudinaryImageId": "glcrwhtsbrrbkuevey9a",
        "avgRating": 3.8,
        "costForTwoMessage": "₹350 FOR TWO",
        "totalRatingsString": "34K+"
    },
    {
        "name": "Royal Biryani point",
        "areaName": "Jeedimetla & Chintal",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/13/5b90b9af-624e-4d18-9509-7e8b38209943_b6d189a2-2d97-4ec9-96b0-e5a85a00a114.jpg",
        "avgRating": 3.4,
        "costForTwoMessage": "₹360 FOR TWO",
        "totalRatingsString": "172"
    },
    {
        "name": "Biryani's Bawarchi",
        "areaName": "Nizampet & Pragathi Nagar",
        "cloudinaryImageId": "62b6cf21936878704a246bb2d2a10f33",
        "avgRating": 2.3,
        "costForTwoMessage": "₹500 FOR TWO",
        "totalRatingsString": "130"
    },
    {
        "name": "Biryanis Mahal",
        "areaName": "Kamalaprasad Nagar",
        "cloudinaryImageId": "fghat8pnaxnnb7eaagme",
        "avgRating": 2.6,
        "costForTwoMessage": "₹200 FOR TWO",
        "totalRatingsString": "387"
    },
    {
        "name": "Juicy Biryani",
        "areaName": "VED VIHAR",
        "cloudinaryImageId": "833ed517c02cadf311ca4812e19d448c",
        "avgRating": 4.6,
        "costForTwoMessage": "₹400 FOR TWO",
        "totalRatingsString": "497"
    },
    {
        "name": "Zam Zam Biryani",
        "areaName": "Gachibowli",
        "cloudinaryImageId": "n3679m7ftd6mqnbt1ige",
        "avgRating": 2.5,
        "costForTwoMessage": "₹200 FOR TWO",
        "totalRatingsString": "52"
    },
    {
        "name": "Capital Multi Cuisine Restaurant",
        "areaName": "Basheerbagh Road",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/9/2bd25249-a38c-4d7d-bcfd-79ead441d79d_db4c0b95-11dd-4800-9929-9365e272db70.jpg",
        "avgRating": 3.8,
        "costForTwoMessage": "₹250 FOR TWO",
        "totalRatingsString": "9.4K+"
    },
    {
        "name": "Biryani King",
        "areaName": "Gachibowli",
        "cloudinaryImageId": "27ee321ebbab5ee694ae4aa4cf98deb5",
        "avgRating": 2.8,
        "costForTwoMessage": "₹200 FOR TWO",
        "totalRatingsString": "374"
    },
    {
        "name": "Biryani Corner",
        "areaName": "Secunderabad",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/15/2435d2c8-41b2-4a88-81f2-180cf750d19c_7821c98a-0cc5-4d64-ae38-b150eded7c21.JPG",
        "avgRating": 3.2,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "150"
    },
    {
        "name": "Hyderabadi Chefs Biryani",
        "areaName": "Gachibowli",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/7/561f303a-f6d5-43a1-9190-07573c5c4cd4_5b5c3d7c-04f7-4d31-b4ae-178b3de2856d.jpg",
        "avgRating": 2.2,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "113"
    },
    {
        "name": "Maharaja Veg Biryani",
        "areaName": "Kachiguda",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/5503d7aa-b4cb-418a-8d7e-bfbe4a58b9df_5ec84cb6-e51f-4213-8343-0391270975f5.jpg",
        "avgRating": 4.3,
        "costForTwoMessage": "₹250 FOR TWO",
        "totalRatingsString": "783"
    },
    {
        "name": "Ismail Biryani",
        "areaName": "Kukatpally",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/20/bed012be-5029-412f-9eaf-c469e35545dd_b6ea389f-90e0-4013-9d88-bed20f7e707d.JPG",
        "avgRating": 2.5,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "24"
    },
    {
        "name": "Midnight Biryani Hub",
        "areaName": "Kukatpally",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/047e46f7-9dd8-4f6b-ab77-67f9d10ba4c6_a1531eb4-a5fd-4c47-8614-c10eca512028.JPG",
        "avgRating": 3.2,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "814"
    },
    {
        "name": "Oh Biryani",
        "areaName": "Mega Hills",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/2/84a4cf1a-f903-4147-89ef-8d86b0044903_ebfa1db0-0a49-4048-891a-994a11f39ff3.jpg",
        "avgRating": 3.7,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "360"
    },
    {
        "name": "Biryani Xpress",
        "areaName": "MANIKONDA",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/31/45dddea3-5cb6-48d1-8b12-62936a70af81_a82fc173-c709-43b3-91da-7af8cc0d7908.jpg",
        "avgRating": 2.2,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "219"
    },
    {
        "name": "Biryani Hub",
        "areaName": "Nizampet",
        "cloudinaryImageId": "vc92w2grbfhctykce7h2",
        "avgRating": 2.2,
        "costForTwoMessage": "₹400 FOR TWO",
        "totalRatingsString": "264"
    },
    {
        "name": "Landmark Biryani",
        "areaName": "Gachibowli",
        "cloudinaryImageId": "gdbmicwwapgypw22tkwx",
        "avgRating": 2.6,
        "costForTwoMessage": "₹500 FOR TWO",
        "totalRatingsString": "119"
    },
    {
        "name": "Biryani Den",
        "areaName": "Banjara Hills",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/13/892f2870-1c07-43ab-b6f2-239747dc8e70_33443080-6d36-4d97-aa5d-97e6c5903de8.JPG",
        "avgRating": 3.6,
        "costForTwoMessage": "₹200 FOR TWO",
        "totalRatingsString": "44"
    },
    {
        "name": "Paradise Haleem & Biryani",
        "areaName": "Kondapur",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/15/fcb24571-b6c2-4860-a6d3-8fe68c12ed0b_40de9edd-9e0a-4336-9f74-bb489ac0bb01.JPG",
        "avgRating": 3,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "160"
    },
    {
        "name": "Biryani Athidi",
        "areaName": "Izzath nagar",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/27/a4e21f02-315d-487f-b30f-385ecb7d07be_c1e27e62-7332-4437-89db-cac82f43d8d2.jpg",
        "avgRating": 2.4,
        "costForTwoMessage": "₹200 FOR TWO",
        "totalRatingsString": "228"
    },
    {
        "name": "Biryanigram",
        "areaName": "Banjara Hills",
        "cloudinaryImageId": "f594f4f63d3e00e93203f02d40e38d24",
        "avgRating": 3.5,
        "costForTwoMessage": "₹498 FOR TWO",
        "totalRatingsString": "39"
    },
    {
        "name": "Veg Biryani House",
        "areaName": "Kachiguda",
        "cloudinaryImageId": "257711686895d909d68c552de9dd8637",
        "avgRating": 4.2,
        "costForTwoMessage": "₹250 FOR TWO",
        "totalRatingsString": "737"
    },
    {
        "name": "Mogul's Biryani",
        "areaName": "Nizampet & Pragathi Nagar",
        "cloudinaryImageId": "bk36zvn0glseswvgnf9u",
        "avgRating": 2.3,
        "costForTwoMessage": "₹500 FOR TWO",
        "totalRatingsString": "115"
    },
    {
        "name": "The Biryani Cafe",
        "areaName": "Kondapur",
        "cloudinaryImageId": "a5895e87514b5e3e0eadfe3321fca0e3",
        "avgRating": 2.3,
        "costForTwoMessage": "₹500 FOR TWO",
        "totalRatingsString": "146"
    },
    {
        "name": "Wow Biryani",
        "areaName": "Manikonda",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/15/fad241c2-4267-478e-b431-2766d56f70c8_6b1c7be4-7845-40dc-b767-acafc50488e5.jpg",
        "avgRating": 2.7,
        "costForTwoMessage": "₹199 FOR TWO",
        "totalRatingsString": "11"
    },
    {
        "name": "Supreme Biryani",
        "areaName": "Gachibowli",
        "cloudinaryImageId": "39a93e48de04a6025c10dbeda0944764",
        "avgRating": 2.3,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "119"
    },
    {
        "name": "Biryani Cafe",
        "areaName": "Gachibowli",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/903d77c8-4786-4d39-927d-d8bc16c49e0f_1f6c3a5f-1700-44a9-9308-8ae0cf7e1f51.jpg",
        "avgRating": 2,
        "costForTwoMessage": "₹400 FOR TWO",
        "totalRatingsString": "23"
    },
    {
        "name": "Biryani Empire",
        "areaName": "Nizampet & Pragathi Nagar",
        "cloudinaryImageId": "js4l1r5q16rhdbhwxg9n",
        "avgRating": 2.5,
        "costForTwoMessage": "₹500 FOR TWO",
        "totalRatingsString": "78"
    },
    {
        "name": "Sagar Papaji Ka Dhaba (Since 1985)",
        "areaName": "Kachiguda",
        "cloudinaryImageId": "f34657e4f398eec0e714971b58f8be69",
        "avgRating": 4.4,
        "costForTwoMessage": "₹400 FOR TWO",
        "totalRatingsString": "2.8K+"
    },
    {
        "name": "Hotel SVM Grand",
        "areaName": "Attapur",
        "cloudinaryImageId": "rjiz6pkfufnob9eetri3",
        "avgRating": 4.3,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "20K+"
    },
    {
        "name": "Desi Kitchen",
        "areaName": "Punjagutta",
        "cloudinaryImageId": "y0ovzxjh6059vwz6hrxa",
        "avgRating": 4.4,
        "costForTwoMessage": "₹200 FOR TWO",
        "totalRatingsString": "4.6K+"
    },
    {
        "name": "Sri Balaji Family Dhaba",
        "areaName": "Padma Rao Nagar",
        "cloudinaryImageId": "duchbza4q4atfnzeyf7u",
        "avgRating": 4.3,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "3.0K+"
    },
    {
        "name": "Kritunga Jagavi's Restaurant",
        "areaName": "Gachibowli",
        "cloudinaryImageId": "ebwsw7chqyxaqrgnuwav",
        "avgRating": 4.2,
        "costForTwoMessage": "₹500 FOR TWO",
        "totalRatingsString": "9.1K+"
    },
    {
        "name": "Madhapur Bawarchi Restaurant",
        "areaName": "Madhapur",
        "cloudinaryImageId": "35676313896c39c25537ec9464502d16",
        "avgRating": 4,
        "costForTwoMessage": "₹400 FOR TWO",
        "totalRatingsString": "42K+"
    },
    {
        "name": "Gulf Restaurant",
        "areaName": "Thirumalagiri",
        "cloudinaryImageId": "nfat6q5t76efjeohn992",
        "avgRating": 4.3,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "23K+"
    },
    {
        "name": "Santosh Dhaba Jashan",
        "areaName": "Kachiguda",
        "cloudinaryImageId": "ioxt85wcbgg3qtadlxik",
        "avgRating": 4.4,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "11K+"
    },
    {
        "name": "Chaitanya's modern kitchen",
        "areaName": "Manikonda",
        "cloudinaryImageId": "tbypygkqjlefqmngxlhs",
        "avgRating": 4.3,
        "costForTwoMessage": "₹350 FOR TWO",
        "totalRatingsString": "6.4K+"
    },
    {
        "name": "Biryani House",
        "areaName": "Attapur",
        "cloudinaryImageId": "f594f4f63d3e00e93203f02d40e38d24",
        "avgRating": 3,
        "costForTwoMessage": "₹400 FOR TWO",
        "totalRatingsString": "321"
    },
    {
        "name": "Paradise Biryani",
        "areaName": "Ameerpet",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/e85acd6d-cf11-42bd-8251-492e17a32e61_87103.jpg",
        "avgRating": 4,
        "costForTwoMessage": "₹400 FOR TWO",
        "totalRatingsString": "30K+"
    },
    {
        "name": "Butta Biryani",
        "areaName": "Miyapur",
        "cloudinaryImageId": "4a6b028c563ac207c8912c2f2bb47bd4",
        "avgRating": 3.9,
        "costForTwoMessage": "₹500 FOR TWO",
        "totalRatingsString": "1.0K+"
    },
    {
        "name": "Pallavi Biryani",
        "areaName": "Kukatpally",
        "cloudinaryImageId": "ekjyy1dgyw9wn4v7cavd",
        "avgRating": 4.1,
        "costForTwoMessage": "₹400 FOR TWO",
        "totalRatingsString": "13K+"
    },
    {
        "name": "Behrouz Biryani",
        "areaName": "Sanath Nagar",
        "cloudinaryImageId": "a4ffed13eb197c6df43dfe1c756560e5",
        "avgRating": 4.1,
        "costForTwoMessage": "₹500 FOR TWO",
        "totalRatingsString": "8.2K+"
    },
    {
        "name": "Biryani Culture",
        "areaName": "Nallakunta & Vidyanagar",
        "cloudinaryImageId": "pvjlvadd7eejccruabh3",
        "avgRating": 4.3,
        "costForTwoMessage": "₹200 FOR TWO",
        "totalRatingsString": "1.6K+"
    },
    {
        "name": "Tadipatri Biryani",
        "areaName": "Jubilee Hills",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/21/b4a74bb1-2e19-4835-8d9f-7490f613f981_960025.JPG",
        "avgRating": 4,
        "costForTwoMessage": "₹400 FOR TWO",
        "totalRatingsString": "100"
    },
    {
        "name": "Mehek Biryani",
        "areaName": "KPHB Colony",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/22/4a9a3d3b-f3ff-42d6-9673-4c3b8b2e2467_454506 (1).jpg",
        "avgRating": 4,
        "costForTwoMessage": "₹250 FOR TWO",
        "totalRatingsString": "4.0K+"
    },
    {
        "name": "Biryani Patnam",
        "areaName": "Nizampet & Pragathi Nagar",
        "cloudinaryImageId": "lzxfaur2zpma1zs0lhbi",
        "avgRating": 4,
        "costForTwoMessage": "₹500 FOR TWO",
        "totalRatingsString": "4.2K+"
    },
    {
        "name": "Hot Bucket Biryani",
        "areaName": "Jeedimetla & Chintal",
        "cloudinaryImageId": "24879ded9db08762fc97e4a3df15b868",
        "avgRating": 3.8,
        "costForTwoMessage": "₹500 FOR TWO",
        "totalRatingsString": "278"
    },
    {
        "name": "Biryani Times",
        "areaName": "Madhapur",
        "cloudinaryImageId": "oodl91s0xay38n8wxudm",
        "avgRating": 4.2,
        "costForTwoMessage": "₹400 FOR TWO",
        "totalRatingsString": "3.5K+"
    },
    {
        "name": "BIRYANI N BIRYANI",
        "areaName": "Langerhouse",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/11/5be6b682-95b1-4396-8f0b-147ad84584d2_1090208.jpg",
        "avgRating": 4,
        "costForTwoMessage": "₹250 FOR TWO",
        "totalRatingsString": "38"
    },
    {
        "name": "Potful - Claypot Biryanis",
        "areaName": "Banjara Hills",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/13/6282b9b1-c80a-4c2e-b55c-3ed1eefc435f_492854.jpg",
        "avgRating": 4.3,
        "costForTwoMessage": "₹500 FOR TWO",
        "totalRatingsString": "4.6K+"
    },
    {
        "name": "Hotel Shabnam Kalyani Biryani",
        "areaName": "Bowenpally",
        "cloudinaryImageId": "nqrhlqn0svocln2ym7x2",
        "avgRating": 4.4,
        "costForTwoMessage": "₹200 FOR TWO",
        "totalRatingsString": "2.3K+"
    },
    {
        "name": "Naidu Gari Kunda Biryani",
        "areaName": "Ameerpet",
        "cloudinaryImageId": "ffa9784d9958a5c6c5172c29a28f98bd",
        "avgRating": 4.2,
        "costForTwoMessage": "₹500 FOR TWO",
        "totalRatingsString": "863"
    },
    {
        "name": "The Biryani Life",
        "areaName": "Sanath Nagar",
        "cloudinaryImageId": "hrygl6jpeeonfvhph02z",
        "avgRating": 3.7,
        "costForTwoMessage": "₹250 FOR TWO",
        "totalRatingsString": "1.5K+"
    },
    {
        "name": "Chickpet Donne Biryani House",
        "areaName": "Kukatpally",
        "cloudinaryImageId": "l0i9yxnpdaaitn82rzxy",
        "avgRating": 4,
        "costForTwoMessage": "₹399 FOR TWO",
        "totalRatingsString": "5.7K+"
    },
    {
        "name": "Rayudu Biryani House",
        "areaName": "MotiNagar",
        "cloudinaryImageId": "afu0gelcf1yqsfsdsheo",
        "avgRating": 4.1,
        "costForTwoMessage": "₹200 FOR TWO",
        "totalRatingsString": "28K+"
    },
    {
        "name": "Bahar Biryani Cafe",
        "areaName": "Ameerpet",
        "cloudinaryImageId": "sbspbom7keuryjexybme",
        "avgRating": 3.9,
        "costForTwoMessage": "₹350 FOR TWO",
        "totalRatingsString": "2.5K+"
    },
    {
        "name": "Sri Vindu Biryani",
        "areaName": "Jeedimetla & Chintal",
        "cloudinaryImageId": "tf0etudkvir0u9vkke4e",
        "avgRating": 4.3,
        "costForTwoMessage": "₹1000 FOR TWO",
        "totalRatingsString": "153"
    },
    {
        "name": "Old Madras Biryani",
        "areaName": "Manikonda",
        "cloudinaryImageId": "gvxj13j4cyki8axhyt1f",
        "avgRating": 3.8,
        "costForTwoMessage": "₹250 FOR TWO",
        "totalRatingsString": "329"
    },
    {
        "name": "ZAZA Mughal Biryani",
        "areaName": "Maruthi  Nagar",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/0033dc39-0e9b-49bd-a22c-c45fb6991ce6_475668.jpg",
        "avgRating": 4.1,
        "costForTwoMessage": "₹250 FOR TWO",
        "totalRatingsString": "772"
    },
    {
        "name": "Chickpet Donne Biryani House, Kondapur",
        "areaName": "Kondapur",
        "cloudinaryImageId": "m7sihbyzsetu6sc7hg2k",
        "avgRating": 4.2,
        "costForTwoMessage": "₹300 FOR TWO",
        "totalRatingsString": "6.3K+"
    }
];

export default restaurants;