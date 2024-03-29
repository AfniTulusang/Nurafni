function Card() {
    return (
        <>
            <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-blue-500 to-purple-600">
                <div class="backdrop-blur-md w-1/2 bg-white bg-opacity-25 rounded-ig shadow-2x1 p-8 m-4">
                    <h1 class="block w-full tect-center tect-gray-800 text-2xl font-bold mb-6">
                        Registrasi
                        <img src={process.env.PUBLIC_URL + '/Afni.jpg'} class="flex-=col mb-1 w-40 h-60" />

                    </h1>
                    <form action="/" method="post">
                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="nama"
                            >
                                Nama:
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="nama"
                                id="nama"

                            />
                        </div>
                        <div class= "flex flex-col mb-4">
                            <label
                            class="mb-2 font-bold text-ig text-gray-900"
                            for="gender"
                            >
                                Gender
                            </label>
                            <div>
                                <input
                                class="border py-2 text-grey-800"
                                type="radio"
                                name="gender"
                                id="pria"
                            />
                            <label
                            class="mb-2 text-gray-900"
                            for="pria"
                            > Pria</label>
                        </div>
                        <div>
                            <input
                            class="border py-2 text-grey-800"
                            type="radio"
                            name="gender"
                            id="wanita"
                        />
                        <label
                        class="mb-2 font-bold text-ig text-gray-900"
                        for="wanita"
                        >wanita</label>
                        </div>
                        </div>
                        <div class="flex flex-col mb-4">
                        <label
                        class="mb-2 font-bold text-ig text-gray-900"
                        for="agama"
                    
                    >
                        Agama
                    </label>
                    <select
                        class="border py-2 px-3 text-grey-800"
                        name="agama"
                        id="agama"
                    >
                        <option value="Protestan">Kristen Protestan</option>
                        <option value="Katholik">Katholik</option>
                        <option value="Islam">Islam</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Budha">Budha</option>
                        <option value="Kepercayaan">Aliran Kepercayaan</option>
                    </select>
                    </div>
                    <button
                     class="block bg-blue-400 hover:bg-blue-600 text-white uppercase text-lg mx-auto p-4 rounded"
                     type="submit"
                     >
                         Buat Akun
                        </button>
                    </form>
                    <a
                        class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gry-900"
                        href="/"
                    >
                        Telah Memiliki Akun?
                    </a>
                </div>
            </div>
        </>
    );
}

export default Card;