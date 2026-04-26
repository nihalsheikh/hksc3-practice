const VideoCard = () => {
  return (
    <div className="p-2 m-2 bg-zinc-800 rounded-md w-80 h-auto">
      <div className="p-20 bg-red-800 rounded-sm mb-2">Image goes here</div>
      <div className="flex">
        <div className="p-2 rounded-full bg-yellow-700 h-auto">Profile</div>
        <div className="p-2 ml-4">
          <div>Video Title</div>
          <div>Account Name</div>
          <div>No. of Views • Uploaded Date</div>
        </div>
      </div>
    </div>  
  );
};

export default VideoCard;
