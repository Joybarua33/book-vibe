import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
    const {bookId : bookParamsId} = useParams();
    console.log("bookId", bookParamsId);

    const books = useLoaderData();
    console.log(books);

    const expectedBook = books.find(book => book.bookId == bookParamsId);
    const {bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = expectedBook;
    
    return (
        <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-5">
            <figure className="w-full flex items-center justify-center bg-gray-100 rounded-xl">
                <img src={image} alt="Album" className="h-[400px]"/>
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title text-2xl">{bookName}</h2>
                <h2 className="card-title">{author}</h2>
                <p className="py-2 border-y">{category}</p>
                <p><span className="font-bold">Review:</span> {review}</p>
                <div className="flex items-center gap-2">
                    {
                        tags.map((tag, index) => (
                            <div key={index} className="badge, text-green-500, bg-green-100 font-bold">
                                {tag}
                            </div>
                        ))
                    }
                </div>
                <div className=" border-t">
                    <div className="flex justify-between items-center gap-2">
                        <span>Number of Pages :</span> <span className="font-semibold">{totalPages}</span>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <span>Publisher : </span> <span className="font-semibold">{publisher}</span>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <span>Year of Publishing</span> <span className="font-semibold">{yearOfPublishing}</span>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <span>Rating : </span> <span className="font-semibold">{rating}</span>
                    </div>
                    <div className="flex items-center mt-8 gap-5">
                        <button className="btn btn-primary">Read</button>
                        <button className="btn btn-primary">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;