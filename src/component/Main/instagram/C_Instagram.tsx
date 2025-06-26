"use client";

import { ContentModel, InstagramModel, Profile } from "@/models/instagramModels";
import { useEffect, useState } from "react";
import Image from "next/image";
import ImageCarousel from "./C_ImageInstagram";



interface InstagramProps {
  act : string;
  id : number;
}

export default function InstagramProfile( { act, id } : InstagramProps) {
  const [posts, setPosts] = useState<InstagramModel[]>([]);
  const [profile, setProfile] = useState<Profile>();
  const [content, setContent] = useState<ContentModel[]>();

  
  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch("/api/instagram");
        const data = await response.json();
        setPosts(data.data);

        console.log('data hasil dari client : ', data.data)
      } catch (error) {
                      
        console.error("Error fetching posts:", error);
      }
    };

    fetchInstagramPosts();
  }, []);


  useEffect(() => {

    
    if (posts && posts.length > 0 && posts[0].profile) {
      const profileData = posts[0].profile;
      setProfile(profileData);
    
      const contentData = posts[0].content?.[0]?.data;
      setContent(contentData); // Tidak akan ada kesalahan
      // console.log('data Profile: ', profileData || 'Data tidak ditemukan');
      // console.log('data Content: ', contentData || 'Data tidak ditemukan');
    }
    
    

  },[posts])

  return (
    <div className="w-full max-w-5xl  flex justify-center items-center  flex-col  rounded-md gap-8 border-4 p-2  ">
      {/* <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Instagram Profile</h2>
          <p className="text-gray-500">Latest posts from Instagram</p>
        </div>
      </div> */}
    
        {/* Profile */}
        <section className="flex flex-col sm:flex-row justify-around items-center w-full gap-4 p-2 xs:p-8 bg-white">

          <div className="flex-center px-1 gap-4">
            <div>
              <Image
                src={'/assets/Logo/LogoMain02.png'} // Nilai default
                // src={profile?.profile_picture_url || '/placeholder-image.png'} // Nilai default
                alt={'Profile'}
                width={100}
                height={100}
                className="w-30 h-30 sm:w-50 sm:h-50 object-contain rounded-full"
              />

            </div>

            <div className="flex flex-col justify-center items-start gap-2">
              <h1 className="font-bold text-lg">{profile?.username}</h1>
              <h2 className="text-slate-600 text-xs sm:text-md">{profile?.biography}</h2>
              <h2 className="text-xs sm:text-md">{profile?.website}</h2>
            </div>
          </div>

          <div className="flex justify-end items-center w-full hp-lg:max-w-[10rem]">

                <div className="w-full gap-4 hidden">
                  <h1>{profile?.followers_count} followers</h1>
                  <h1>{profile?.follows_count} following</h1>
                </div>

                <button className="bg-color1 px-6 py-2 text-white rounded-lg w-full">
                    <h1 className="text-sm">Folow</h1>
                </button>
          </div>

        </section>



        <section className="w-full border p-2 ">
          <ImageCarousel content={content || []} />
        </section>


      </div>

  );
}
