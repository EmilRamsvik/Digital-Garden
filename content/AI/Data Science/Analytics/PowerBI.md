---
created: 2023-12-04T13:14
updated: 2025-10-09T09:42
tags:
  - article
  - digital-garden
Finished: false
---

# PowerBI


## Dax
DAX is used _after_ data is loaded into the Power BI model. Usually it is used for:

- **Calculated Columns**: Computed row-by-row, stored in the model (use sparingly—they increase file size)
- **Measures**: Dynamic calculations that evaluate based on filter context.
- **Calculated Tables**: Less common, but useful for creating dimension tables or what-if parameters

## PowerQuery
Power Query is your ETL tool _within_ Power BI. It's where you connect to data sources, clean, transform, and shape data before loading it into your model. The M language powers this. 
- Use it for data cleansing (removing nulls, fixing data types, handling errors)
- Combining data from multiple sources (appending, merging queries)
- Creating reusable transformations and parameters
- **Important**: Power Query transformations happen at refresh time, so they should be efficient

**The Golden Rule: Power Query vs. DAX** If you can do a transformation in Power Query, do it there. Power Query runs once at refresh; DAX calculated columns evaluate and store results. Use DAX for things that _must_ be dynamic based on user interactions (slicers, filters, etc.).
# Links
- 

# Thoughts 
- 


