function Card() {
    return (
        <>
            <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-blue-500 to-blue-600">
                <div class="w-1/2 bg-white rounded-lg shadow-2xl p-8 m-4">
                    <h1 class="block w-full tect-center tect-gray-800 text-2xl font-bold mb-6">
                        Kartu   Tanda Penduduk
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

                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-grey-900"
                                 for="nama"
                            >
                                Tempat/Tgl Lahir:
                            </label>
                            <input
                                class="border py-1 px-2 text-grey-800"
                                type="text"
                                name="Tempat/Tanggal lahir"
                                id="nama"
                            />
                        </div>
                        
                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-grey-900"
                                for="nama"
                        >
                            Jenis Kelamin:
                        </label>
                        <input 
                            class="border py-1 px-2 text-grey-800"
                            type="text"
                            name="Jenis Kelamin"
                            id="nama"
                        />
                    </div>

                    <div class="flex flex-col mb-4">
                          <label
                          class="mb-2 font-bold text lg text-grey-800"
                          for="nama"
                        > 
                            Alamat:
                        </label>
                        <input
                            class="border py-1 px-2 text-gray-900"
                            type="text"
                            name="Alamat"
                            id="naam"
                        />
                    </div>

                    <div class="flex flex-col mb-4">
                        <label
                            class="mb-2 font-bold text-Ig text-gray-800"
                             for="nama"
                    >
                        Agama:
                    </label>
                    <input
                            class="border py-1 px-2 text-grey-800"
                            type="text"
                            name="Agama"
                            id="naam"
                        />
                    </div>
                    <div class="flex flex-col mb-4">
                        <label
                        class="mb-2 font-bold text-Ig text-grey-800"
                        for="nama"
                    >
                        Status Perkawinan:
                    </label>
                    <input
                            class="border py-1 px-2 text-grey-800"
                            type="text"
                            name="Status Perkawinan"
                            id="naam"
                        />
                    </div>
                    <div class="flex flex-col mb-4">
                        <label
                        class="mb-2 font-bold text-Ig text-grey-800"
                        for="nama"
                    >
                        Pekerjaan:
                    </label>
                    <input
                            class="border py-1 px-2 text-grey-800"
                            type="text"
                            name="Pekerjaan"
                            id="naam"
                        />
                    </div>
                    <div class="flex flex-col mb-4">
                        <label
                            class="mb-2 font-bold text-Ig text-grey-800"
                            for="nama"
                        >
                        Kewarganegaraan:
                    </label>
                    <input
                            class="border py-1 px-2 text-grey-800"
                            type="text"
                            name="Kewarganegaraan"
                            id="naam"
                        />
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