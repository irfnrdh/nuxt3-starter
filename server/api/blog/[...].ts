const router = createRouter()

router.get('/blog', defineEventHandler((event) => {
    return "Blog Get Method"
}));

router.post('/blog', defineEventHandler((event) => {
    return "Blog Post Method"
}));

router.put('/blog', defineEventHandler((event) => {
    return "Blog Put Method"
}));

router.patch('/blog', defineEventHandler((event) => {
    return "Blog Put Method"
}));

router.delete('/blog', defineEventHandler((event) => {
    return "Blog Delete Method"
}));


router.get('/blog/all', defineEventHandler((event) => {
    return "All Blog Get Method"
}));

export default useBase('/api/blog', router.handler)