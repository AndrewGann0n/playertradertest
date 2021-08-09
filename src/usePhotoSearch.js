import { useEffect, useState } from 'react'
import axios from 'axios'

export default function usePhotoSearch(query, pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [photos, setPhotos] = useState([])
    const [hasMore, setHasMore] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/photos',
            params: { q: query, page: pageNumber},
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setPhotos(prevPhotos => {
                return [...new Set([...prevPhotos, res.data.docs.map(b => b.Photo)])]
            })
            setHasMore(res.data.docs.length > 0)
            setLoading(false)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [query, pageNumber])

    return { loading, error, photos, hasMore}
}
