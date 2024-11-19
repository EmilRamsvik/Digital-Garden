export default () => {
	const fetchAndPickRandomArticle = () => {
		try {
			const articleList = require("../../static/article_list.json");
			const randomIndex = Math.floor(Math.random() * articles.length);
			return articles[randomIndex];
		} catch (error) {
			console.error("Failed to fetch article list", error);
			return null;
		}
	};

	return fetchAndPickRandomArticle();
};
