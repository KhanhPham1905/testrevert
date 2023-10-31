/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: ['timviec365.vn', 'cdn.timviec365.vn', 'hungha365.com', 'ht.timviec365.vn'],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	webpack: (config) => {
		config.resolve.alias['@styles'] = path.join(__dirname, '/styles')
		return config
	},
	async rewrites() {
		return [
			{
				source: '/',
				destination: '/trangchu',
			},
      		{
				source: '/tim-viec-lam-freelancer-ban-thoi-gian.html',
				destination: '/trangchu/tim-viec-lam-freelancer-ban-thoi-gian',
			},
      		{
				source: '/tim-viec-lam-freelancer-theo-du-an.html',
				destination: '/trangchu/tim-viec-lam-freelancer-theo-du-an',
			},
      		{
				source: '/tim-viec-lam-freelancer.html',
				destination: '/trangchu/tim-viec-lam-freelancer',
			},
      		{
				source: '/ung-vien-freelancer.html',
				destination: '/trangchu/ung-vien-freelancer',
			},
      		{
				source: '/huong-dan.html',
				destination: '/trangchu/huong-dan',
			},
      		{
				source: '/dang-du-an.html',
				destination: '/trangchu/dang-du-an',
			},
      		{
				source: '/dang-ky-freelancer.html',
				destination: '/trangchu/dang-ky-freelancer',
			},
     		{	
				source: '/:jobname-vl:id.html',
				destination: '/trangchu/viec-lam',
			},

      		{
				source: '/nha-tuyen-dung-:name-ntd:id',
				destination: '/trangchu/nha-tuyen-dung-ntd',
			},
      		{
				source: '/ung-vien-freelancer-:name-uv:id.html',
				destination: '/trangchu/ung-vien-freelancer/chitiet',
			},
      		{
				source: '/quen-mat-khau-flc.html',
				destination: '/trangchu/quen-mat-khau-flc',
			},
			{
				source: '/quen-mat-khau-ntd.html',
				destination: '/trangchu/quen-mat-khau-flc',
			},
      		{
				source: '/du-an-dang-thuc-hien.html',
				destination: '/freelancer/du-an-dang-thuc-hien',
			},
			// NTD
			{
				source: '/thong-tin-nha-tuyen-dung.html',
				destination: '/cong-ty/quan-ly-chung',
			},
			{
				source: '/dang-viec-ban-thoi-gian.html',
				destination: '/cong-ty/tuyen-dung-freelancer/dang-viec-ban-thoi-gian',
			},
			{
				source: '/dang-viec-theo-du-an.html',
				destination: '/cong-ty/tuyen-dung-freelancer/dang-viec-theo-du-an',
			},
			
			{
				source: '/tin-da-dang.html',
				destination: '/cong-ty/tin-da-dang',
			},
			{
				source: '/ung-vien-freelancer.html',
				destination: '/cong-ty/tim-kiem-freelancer',
			},
			{
				source: '/freelancer-dat-gia.html',
				destination: '/cong-ty/quan-ly-ho-so/freelancer-dat-gia',
			},
			{
				source: '/freelancer-dang-lam-viec.html',
				destination: '/cong-ty/quan-ly-ho-so/freelancer-dang-lam-viec',
			},
			{
				source: '/freelancer-da-luu.html',
				destination: '/cong-ty/quan-ly-ho-so/freelancer-da-luu',
			},
			{
				source: '/cap-nhat-thong-tin.html',
				destination: '/cong-ty/quan-ly-tai-khoan/cap-nhat-thong-tin',
			},
			// Freelancer
			{
				source: '/thong-tin-ung-vien.html',
				destination: '/freelancer/quan-ly-chung/hoan-thien-ho-so',
			},
			{
				source: '/du-an-dang-thuc-hien.html',
				destination: '/freelancer/du-an-dang-thuc-hien',
			},
			{
				source: '/du-an-da-luu.html',
				destination: '/freelancer/du-an-da-luu'
			},
			{
				source: '/doi-mat-khau-uv.html',
				destination: '/freelancer/doi-mat-khau'
			},
		]

	},
}

module.exports = nextConfig
