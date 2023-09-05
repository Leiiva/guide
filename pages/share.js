import { toast } from 'react-toastify';

export function shareArticle() {
    if (typeof window !== 'undefined') {
        const url = window.location.href;
        navigator.clipboard.writeText(url);
        console.log("shareArticle function triggered");

        toast.success("Article link copied to clipboard!", {
            autoClose: 2000,
            hideProgressBar: true
        });
    }
}
