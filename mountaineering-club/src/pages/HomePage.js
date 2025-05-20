import mountainBg from '../assets/mountain-bg.jpg';

const HomePage = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${mountainBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto pt-16 text-white">
        <div className="flex items-center space-x-4">
          <img src='../assets/logo.jpg' alt="Logo" className="h-12" />
          <h1 className="text-4xl font-roboto">Хроники Альпинистского Клуба</h1>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="bg-primary p-4 rounded-lg shadow-md text-center">
            <p className="text-2xl font-bold">42</p>
            <p>Всего восхождений</p>
          </div>
          <div className="bg-primary p-4 rounded-lg shadow-md text-center">
            <p className="text-2xl font-bold">15</p>
            <p>Активных участников</p>
          </div>
          <div className="bg-primary p-4 rounded-lg shadow-md text-center">
            <p className="text-2xl font-bold">8</p>
            <p>Вершин покорено</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

/*const HomePage = () => {
    return (
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto pt-16 text-white">
          <div className="flex items-center space-x-4">
            <img src="/Users/neliakiasova/ProjectForStudy/spo/kurs/mountaineering-club/src/assets/logo.jpg" alt="Logo" className="h-12" />
            <h1 className="text-4xl font-roboto">Хроники Альпинистского Клуба</h1>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-primary p-4 rounded-lg shadow-md text-center">
              <p className="text-2xl font-bold">42</p>
              <p>Всего восхождений</p>
            </div>
            <div className="bg-primary p-4 rounded-lg shadow-md text-center">
              <p className="text-2xl font-bold">15</p>
              <p>Активных участников</p>
            </div>
            <div className="bg-primary p-4 rounded-lg shadow-md text-center">
              <p className="text-2xl font-bold">8</p>
              <p>Вершин покорено</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomePage;*/