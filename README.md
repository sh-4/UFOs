# UFOs

## Overview
The purpose of this repository is to display data that has been collected about UFO sightings in a table format, with the ability to filter through the results using search parameters. The search field can be used to filter by date, city, state, country, the shape of the UFO, or any combination of these. Once the desired search filters are entered, the table will adjust to show only the data that the user wants to view.

## Results
In order to learn more about UFO sightings, one must first scroll down to the table containing the data. From here, you can see all of the results *please note this image is a small exerpt of the full data table*:

![startup_table](https://user-images.githubusercontent.com/105808695/186503409-34c2b6be-7b6a-47b0-9290-7e7c93eacae4.png)


If someone is curious about more specific sightings, they can utilize the **Filter Search** to the left of the data:

![blank_filters](https://user-images.githubusercontent.com/105808695/186503450-05deebbf-0a3e-4abf-95d1-72fa9b0a8d38.png)


Any, or all, of these specific fields can then be used to show only that data in the table to the right. Using the format suggested in the input boxes, here is an example of searching for only sightings in Kentucky. To start, **input “ky” into the state field**, as that is Kentucky’s abbreviation and how the table will recognize which data we want:

![search_ky](https://user-images.githubusercontent.com/105808695/186503524-d8cdb3f6-2b63-451c-8865-aa145dded40e.png)


Now, the user can **press enter** to complete their search of only UFO sightings in the state of Kentucky, and we can see how the table has adjusted:

![results_ky](https://user-images.githubusercontent.com/105808695/186503563-b2e04923-40ca-4fe5-ab3a-dd7e1c22c063.png)


This process can be repeated using any, or all, of the given search fields to meet the needs of any curious viewer.

## Summary

#### Drawback

One drawback of this design is that the table doesn’t show anything at all when a result does not match a search parameter input by the user. This could potentially cause confusion with either the user believing something is wrong with their device, or something is wrong with the website.

#### Recommendations

-	To remove the possibility of a user encountering confusion, from the drawback stated above, a message could be added stating “No Matching Results” – either as a pop-up box or a message within the table.
-	Switch the search fields from an input method to a drop-down menu method. This way, the user could see the individual parameters ahead of time. Someone new to UFOlogy could benefit from this, especially with regard to the shape category – not everyone thinks of “light” as a shape, but this could help to pique their curiosity.
-	Add a section for users to submit sightings that would be appended to the table of currently listed UFO sightings. This adds even more interactivity and creates more community within the site itself. The input fields could have character limits to ensure formatting will match the current table's data format - such as a two character limit for state and country abbreviations. This will reduce the need for future data cleanup, for example, users inputting "usa" rather than "us."
