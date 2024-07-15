
const Apps = () => {
    return (
        <section className="bg-black px-5 md:px-10 lg:px-44 py-20">
            <div className="flex justify-between flex-col gap-10 items-center lg:flex-row">
                <div className=" space-y-5 text-white text-center lg:text-left ">
                    <h3 className="text-3xl lg:text-4xl font-bold">Download our mobile app ⚡️</h3>
                    <div className="">
                        <p className="font-semibold text-sm">
                            Get exclusive access to car rentals with our mobile app. Download <br />now and experience convenience on the go.
                        </p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <img className="w-44 object-contain" src="../images/app_store.png" alt="" />
                    <img className="w-44 object-contain" src="../images/google_play.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Apps