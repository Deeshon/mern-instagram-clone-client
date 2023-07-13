import React from 'react'
import {CgProfile} from 'react-icons/cg'
import {MdLocationPin} from 'react-icons/md'
import {IoMdBriefcase} from 'react-icons/io'
import {BsTwitter, BsLinkedin, BsImage, BsFillHeartFill} from 'react-icons/bs'
import {MdModeEdit, MdPersonRemove} from 'react-icons/md'
import {BiSolidVideos,BiComment, BiSolidComment} from 'react-icons/bi'
import {CgAttachment} from 'react-icons/cg'
import {AiTwotoneAudio} from 'react-icons/ai'
import {FaRegHeart} from 'react-icons/fa'
import {ImShare2} from 'react-icons/im'

const Home = () => {
  return (
    <div className='md:flex justify-center my-10 text-white h-[fit-content] mb-10'>
        <div className='h-[inherit] md:w-3/12 mx-2 mb-10'>
            <div className='bg-[#181818] h-[420px] mx-2 rounded-lg p-5'>
                <div className=' flex justify-between border-b border-gray-500 pb-3'>
                    <div className='flex'>
                        <div className='w-12 h-12 bg-white rounded-full' style={{backgroundImage: 'url(/p2.jpeg)', backgroundSize: 'cover'}}></div>
                        <div className='ml-5'>
                            <p>Fake Man</p>
                            <p className='text-xs text-gray-500'>2 Friends</p>
                        </div>
                    </div>
                    <CgProfile size={25} />
                </div>
                <div className='mt-5 border-b border-gray-500 pb-3'>
                    <div className='flex items-center pb-5'>
                        <MdLocationPin size={22} />
                        <p className='text-xs px-2'>San Fransisco, CA</p>
                    </div>
                    <div className='flex items-center'>
                        <IoMdBriefcase size={22} />
                        <p className='text-xs px-2'>Software Engineer at FaceBook</p>
                    </div>
                </div>
                <div className='text-xs mt-5 border-b border-gray-500 pb-3'>
                    <div className='flex justify-between pb-5'>
                        <p>Who's viewed your profile</p>
                        <p>1023</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Impressions of your posts</p>
                        <p>4823</p>
                    </div>
                </div>
                <div className='text-xs mt-5 pb-3'>
                    <p className='text-sm pb-4'>Social Profiles</p>
                    <div className='flex justify-between pb-2'>
                        <div className='flex'>
                            <BsTwitter size={22} />
                                <div className='ml-5'>
                                    <p>Twitter</p>
                                    <p className='text-xs text-gray-500'>Social Platform</p>
                                </div>
                        </div>
                        <MdModeEdit size={20} />
                    </div>
                    <div className='flex justify-between'>
                    <div className='flex'>
                            <BsLinkedin size={22} />
                                <div className='ml-5'>
                                    <p>LinkedIn</p>
                                    <p className='text-xs text-gray-500'>Network Platform</p>
                                </div>
                        </div>
                        <MdModeEdit size={20} />
                    </div>
                </div>
            </div>
        </div>
        <div className='md:w-4/12 h-[inherit] mx-2 mb-10'>
            <div className='bg-[#181818] h-32 mb-10 rounded-lg p-5'>
                <div className='border-b pb-3 border-gray-500 flex justify-between items-center'>
                    <div className='w-14 h-12 bg-white rounded-full' style={{backgroundImage: 'url(/p2.jpeg)', backgroundSize: 'cover'}}></div>
                    <div className='w-full ml-5'>
                        <input className='w-full bg-[#2d2d2d] rounded-3xl p-2 py-3 px-4 text-xs' type='text' name='post-content' placeholder="What's on you mind?"></input>
                    </div>
                </div>
                <div className='w-full flex justify-between items-center pt-2'>
                    <div className='text-xs flex items-center'>
                        <button className='mr-2'><BsImage /></button>
                        <p>Image</p>
                    </div>
                    <div className='text-xs flex items-center'>
                        <button className='mr-2'><BiSolidVideos /></button>
                        <p>Clip</p>
                    </div>
                    <div className='text-xs flex items-center'>
                        <button className='mr-2'><CgAttachment /></button>
                        <p>Attachment</p>
                    </div>
                    <div className='text-xs flex items-center'>
                        <button className='mr-2'><AiTwotoneAudio /></button>
                        <p>Audio</p>
                    </div>
                    <button className='bg-[#46c0dc] py-2 px-5 rounded-3xl text-[10px] font-semibold'>Post</button>
                </div>
            </div>
            <div className='h-[inherit] '>
                <div className='bg-[#181818] h-[850px] rounded-lg p-5 mb-8'>
                    <div className=' flex justify-between mb-4'>
                        <div className='flex'>
                            <div className='w-12 h-12 bg-white rounded-full' style={{backgroundImage: 'url(/p4.jpeg)', backgroundSize: 'cover'}}></div>
                            <div className='ml-5'>
                                <p>Jane Doe </p>
                                <p className='text-xs text-gray-500'>Hacker</p>
                            </div>
                        </div>
                        <div className='bg-[#002a35] bg-opacity-70 w-8 h-8 rounded-xl flex justify-center items-center'>
                            <MdPersonRemove className='text-[#46c0dc]' size={20} />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <p className='text-xs'>Some really long random description.</p>
                    </div>
                    <div className='w-full h-[85%] rounded-lg mb-4' style={{backgroundImage: 'url(/post1.jpeg)', backgroundSize: 'cover'}} >
                    </div>
                    <div className='flex justify-between mb-5 items-center'>
                        <div className='w-20 flex justify-between items-center'>
                            <div className='text-xs flex items-center'>
                                <button className='mr-2'><BsFillHeartFill size={15} /> </button>
                                <p>6</p>
                            </div>
                            <div className='text-xs flex items-center'>
                                <button className='mr-2'><BiSolidComment size={15} /> </button>
                                <p>3</p>
                            </div>
                        </div>  
                        <div>
                            <button><ImShare2 size={15} /> </button>
                        </div>
                    </div>
                </div>
                <div className='bg-[#181818] h-[850px] rounded-lg p-5 mb-8'>
                    <div className=' flex justify-between mb-4'>
                        <div className='flex'>
                            <div className='w-12 h-12 bg-white rounded-full' style={{backgroundImage: 'url(/p1.jpeg)', backgroundSize: 'cover'}}></div>
                            <div className='ml-5'>
                                <p>Watch Happen </p>
                                <p className='text-xs text-gray-500'>Educator</p>
                            </div>
                        </div>
                        <div className='bg-[#002a35] bg-opacity-70 w-8 h-8 rounded-xl flex justify-center items-center'>
                            <MdPersonRemove className='text-[#46c0dc]' size={20} />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <p className='text-xs'>Another really long random description.</p>
                    </div>
                    <div className='w-full h-[85%] rounded-lg mb-4' style={{backgroundImage: 'url(/post2.jpeg)', backgroundSize: 'cover'}} >
                    </div>
                    <div className='flex justify-between mb-5 items-center'>
                        <div className='w-20 flex justify-between items-center'>
                            <div className='text-xs flex items-center'>
                                <button className='mr-2'><BsFillHeartFill size={15} /> </button>
                                <p>6</p>
                            </div>
                            <div className='text-xs flex items-center'>
                                <button className='mr-2'><BiSolidComment size={15} /> </button>
                                <p>3</p>
                            </div>
                        </div>  
                        <div>
                            <button><ImShare2 size={15} /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-[inherit] md:w-3/12 mb-10'>
            <div className='h-fit'>
                <div className='bg-[#181818] mb-7 p-5 mx-2 rounded-lg'>
                    <div className='flex justify-between mb-2'>
                        <p className='text-sm'>Sponsored</p>
                        <p className='text-gray-500 text-xs'>Create Ad</p>
                    </div>
                    <div className='w-full h-52 rounded-lg mb-2'  style={{backgroundImage: 'url(/info4.jpeg)', backgroundSize: 'cover'}}></div>
                    <div className='flex justify-between text-xs mb-2'>
                        <p>MikaCosmetics</p>
                        <p className='text-gray-500'>mikacosmetics.com</p>
                    </div>
                    <div>
                        <p className='text-xs mb-2 text-gray-500'>
                            Your pathway immaculate and stunning beauty and made sure your skin is
                            exfoliating skin and shining like light.
                        </p>
                    </div>
                </div>
                <div className='bg-[#181818] mb-6 p-5 mx-2 rounded-lg'>
                    <div className='mb-4'>
                        <p className='text-sm'>Friend List</p>
                    </div>
                    <div>
                        <div className=' flex justify-between pb-4'>
                            <div className='flex'>
                                <div className='w-12 h-12 bg-white rounded-full' style={{backgroundImage: 'url(/p1.jpeg)', backgroundSize: 'cover'}}></div>
                                <div className='ml-5'>
                                    <p>Watcha Happen </p>
                                    <p className='text-xs text-gray-500'>Educator</p>
                                </div>
                            </div>
                            <div className='bg-[#002a35] bg-opacity-70 w-8 h-8 rounded-xl flex justify-center items-center'>
                                <MdPersonRemove className='text-[#46c0dc]' size={20} />
                            </div>
                        </div>
                        <div className=' flex justify-between'>
                            <div className='flex'>
                                <div className='w-12 h-12 bg-white rounded-full' style={{backgroundImage: 'url(/p4.jpeg)', backgroundSize: 'cover'}}></div>
                                <div className='ml-5'>
                                    <p>Jane Doe </p>
                                    <p className='text-xs text-gray-500'>Hacker</p>
                                </div>
                            </div>
                            <div className='bg-[#002a35] bg-opacity-70 w-8 h-8 rounded-xl flex justify-center items-center'>
                                <MdPersonRemove className='text-[#46c0dc]' size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home